pipeline {

    agent any

    stages {

        stage('checkout'){
            steps{
                git branch:'main' , url: 'https://github.com/yash1015/E-Commerce_Microservices-_App_-Deployement_Pipeline.git'
            }
        }

        stage(cart-service){
            steps{
                sh '''
                docker build -t cart-service ./cart-service
                docker stop cart-service || true
                docker rm cart-service || true
                docker run -d -p 3002:3002 --name cart-service cart-service
                '''
            }
        }

        stage('gateway'){
            steps{
                sh '''
                docker build -t gateway ./gateway
                docker stop gateway || true
                docker rm gateway || true
                docker run -d -p 3000:3000 --name gateway gateway
                '''
            }
        }

        stage('order-service'){
            steps{
                sh '''
                docker builld -t order-service ./order-service
                docker stop order-service || true
                docker rm order-service || true
            
                docker run -d -p 3003:3003 --name order-service order-service
                '''
            }
        }

        stage('product-servie'){
            steps{
                sh '''
                docker build -t product-service ./product-service
                docker stop product-service || true
                docker rm product-service || true
                docker run -d -p 3001:3001 --name product-service product-service 


            }
        }









    }







}