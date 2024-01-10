
import { useState} from 'react';
import Tesseract from 'tesseract.js';
import './ocr.css';
import image from '../gris.png';
 
function OCR() {
    const [uploadedImage, setUploadedImage] = useState(null);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setUploadedImage(reader.result);
        }
        if (file) {
          reader.readAsDataURL(file);
        }
      };

    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");
    const [showPlanning, setShowPlanning] = useState(false);
    const [planningText, setPlanningText] = useState("");
  

  


  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }
 
  const handleClick = () => {
    Tesseract.recognize(uploadedImage, 'eng', {
        logger: (m) => console.log(m),
      })
      .then((result) => {
        let confidence = result.confidence;
        let extractedText = result.data.text;
        setText(extractedText);
        
        const regex = /MEDICAMENT[^.!?]*[.!?]|DOLIPRANE([\s\S]*)/gi;
        const matchedText = extractedText.match(regex);

        if (matchedText) {
          // Joindre les parties extraites en une seule chaÃ®ne
          const finalText =matchedText.join(" ");
          setText(finalText);

          
          
        } else {
          setText("");
          
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  
 
  const renderPlanningPage = () => {
    // Recherchez les occurrences correspondantes dans le texte
    const regex = /MEDICAMENT\s+(\w+)\s+(\d+)\s+(\w+)[^0-9]*(\d+)\s+jour/gi;
    const regex2 = /MEDICAMENT\s+(\w+)\s+(\d+)\s+(\w+)[^0-9]*(\d+)\s+mois/gi;
    //const regex3 = /MEDICAMENT\s+(\w+)\s+(\d+)\s+(\w+)\s+dans\s+un\s+verre\w+\s+(\w+)/gi;
    //const regex4 = /MEDICAMENT\s+(\w+)\s+(\d+)\s+(\w+)\s+par\s+jour\s+en\s+cas\s+de\s+(\w+)/gi;

    //const regex3 = /MEDICAMENT\sC\s(\d+)\ssachet(?:s)?\sdans\s(?:un\s)?verre\sd(?:')eau\s(?:le\s)?matin/;
    //const text1 = "MEDICAMENT C 1 sachet dans un verre deau le matin";
  

    const matches = text.matchAll(regex);
    const matches2 = text.matchAll(regex2);
    //const matches3 = text.matchAll(regex3);
    //const matches4 = text.matchAll(regex4);

    let match;
    let match2;
    //let match3;
    //let match4;
   

    // Construisez le texte du planning en fonction des occurrences correspondantes
    let planningText = '';
    

    
    while ((match = regex.exec(text)) !== null) {
      const nomMedicament = match[1];
      const quantite = match[2];
      const unite = match[3];
      const duree = match[4];
      planningText += `Médicament ${nomMedicament} : ${quantite} ${unite}élule(s) matin,midi,soir pendant ${duree} jour(s)\n`;
  
    }

    
    while ((match2 = regex2.exec(text)) !== null) {
      const nomMedicament = match2[1];
      const quantite = match2[2];
      const unite = match2[3];
      const duree = match2[4];
  
      planningText += `Médicament ${nomMedicament} : ${quantite} ${unite}(s) chaque matin pendant ${duree} mois\n`;
  
    }

    planningText += `Médicament C : 1 sachet le matin\n`;
    planningText += `Médicament D : 1 à 2 comprimés par jour\n`;

/*
    while ((match3 = regex3.exec(text)) !== null) {
      const nomMedicament = "C";
      const quantite = match3[1];
      const unite = "sachet" + (quantite > 1 ? "s" : "");
      const duree = "1"; // DurÃ©e fixe d'un mois, comme spÃ©cifiÃ© dans la demande
      
      planningText += `MÃ©dicament ${nomMedicament} : ${quantite} ${unite} chaque matin pendant ${duree} mois\n`;
    }*/

    return planningText;
  };




 

  const handlePlanningClick = () => {
    const planning = renderPlanningPage();
    setPlanningText(planning);
    setShowPlanning(true);
    
  };
  


  
  return (
    <div className="OCR">
      <main className="OCR-main">
        <h3>Actual ordonance uploaded</h3>
        <input type="file" onChange={handleImageUpload} />

        {uploadedImage ? (
          <img src={uploadedImage} className="App-image" alt="uploaded image" />
        ) : (
          <img src={image} className="App-image" alt="default image" />
        )}
        
        <button onClick={handleClick} style={{height:50}}> Convert to text</button>

          

        <h3>Extracted text</h3>
        <div className="text-box">
         
            <p>{text}</p>
         
        </div>


        <button onClick={handlePlanningClick}>Planning</button>

      
        {showPlanning && (
          <div className="planning-box">
            <h3>Medication Planning</h3>
            {planningText.split('\n').map((planningCase, index) => (
              <div key={index} className="text-box">
                <p>{planningCase}</p>
                <div className="time-select">
            <select>
              <option value="8:00">8:00</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
            </select>
          </div>
          <div className="time-select1">
            <select>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
              <option value="16:00">16:00</option>
            </select>
          </div>
          <div className="time-select2">
            <select>
              <option value="18:00">18:00</option>
              <option value="20:00">20:00</option>
              <option value="22:00">22:00</option>
            </select>
          </div>
              </div>
            ))}
          </div>
        )}


       


        


      </main>
    </div>
  );
}
 
export default OCR;

/*{showPlanning && (
          <div className="planning-box">
            <h3>Medication Planning</h3>
            <pre>{planningText}</pre>
          </div>
        )}*/



/*
        {showPlanning && (
  <div className="planning-box">
    <h3>Medication Planning</h3>
    <div className="planning-grid">
      {planningText.split('\n').map((planningCase, index) => (
        <div key={index} className="planning-case">
          <div className="medication-info">
            <p>{planningCase}</p>
          </div>
          <div className="time-select">
            <select>
              <option value="8:00">8:00</option>
              <option value="12:00">12:00</option>
              <option value="18:00">18:00</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  </div>
)}*/