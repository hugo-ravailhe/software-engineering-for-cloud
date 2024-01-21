```
kubectl apply -f ./k8s_mysql_deployment.yaml
kubectl apply -f ./k8s_mysql_service.yaml
kubectl apply -f ./k8s_backend_deployment.yaml
kubectl apply -f ./k8s_backend_service.yaml
kubectl apply -f ./k8s_frontend_deployment.yaml
kubectl apply -f ./k8s_frontend_service.yaml
kubectl apply -f ./ingress.yml
```

```
kubectl get deployments
kubectl get pods
kubectl get services
kubectl logs <pod>
```

```
kubectl port-forward service/frontend-heale-service 3000:3000
kubectl port-forward service/backend-heale-service 3001:3001
```