import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import L from 'leaflet';
import './map.css';

const Map = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        // Obtenir la géolocalisation de l'utilisateur
        const { coords } = await getCurrentLocation();

        // Appeler l'API d'OpenStreetMap pour rechercher les pharmacies à proximité
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude.toFixed(6)}&lon=${coords.longitude.toFixed(6)}`
        );

        // Extraire les pharmacies de la réponse
        const pharmaciesData = response.data?.pharmacies || [];

        setPharmacies(pharmaciesData);
        setLoading(false);
      } catch (error) {
        setError("Une erreur s'est produite lors de la récupération des pharmacies.");
        setLoading(false);
      }
    };

    fetchPharmacies();
  }, []);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    if (!loading && !error && mapRef.current && !mapInstance.current) {
      // Initialiser la carte
      const map = L.map(mapRef.current).setView([0, 0], 13);
      mapInstance.current = map;

      // Ajouter une couche de tuiles (cartes)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Ajouter un marqueur pour la localisation de l'utilisateur
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);
          L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup('Votre position')
            .openPopup();
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
        }
      );

      // Ajouter des marqueurs pour chaque pharmacie
      pharmacies.forEach((pharmacy) => {
        L.marker([pharmacy.lat, pharmacy.lon])
          .addTo(mapInstance.current)
          .bindPopup(`<strong>${pharmacy.name}</strong><br>${pharmacy.address}`);
      });
    }
  }, [pharmacies, loading, error]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Pharmacies à proximité :</h1>
      <div id="map" ref={mapRef}></div>
    </div>
  );
};

export default Map;
