#!bin/bash

echo "Hello, you are running sass --watch!"

cd 

sudo sass --watch ./MyProjects/conference/scss/style.scss:./MyProjects/conference/css/style.css  --style expanded 

echo "sass is running, start working."
