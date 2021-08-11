## JavaScript Basics :: Learning basic concepts of JS

### Using Node JS in a docker in Ubuntu
```
sudo apt  install docker.io
sudo docker --version
sudo sytemctl status docker
sudo docker pull node
sudo docker run -it -d --name node_container node bash
sudo docker exec -it node_container /bin/bash
```