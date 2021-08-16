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

#### Objects
Objects in JS are key-value pair datasets. 

#### Arrays
Arrays are like object but without a key and does keep the order in which data is stored. Arrays can contain objects. Also array can contain any type of data combinations. Data can be accessed from arrays using indexes. 
```js
var arrayExample = ['Strings', 10, {'objects': 'yes'}, true]
```

##### Equality Check