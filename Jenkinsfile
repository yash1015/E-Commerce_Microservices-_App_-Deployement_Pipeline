pipeline {

    agent any

    stages {

        stage('checkout'){
            steps{
                git branch:'main' , url: 'https://github.com/yash1015/E-Commerce_Microservices-_App_-Deployement_Pipeline.git'
            }
        }

        stage('cart-service'){
            steps{
                sh '''
                docker build -t cart-service ./cart-service
                docker stop cart-service || true
                docker rm cart-service || true
                docker run -d -p 3002:3000 --name cart-service cart-service
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
                docker build -t order-service ./order-service
                docker stop order-service || true
                docker rm order-service || true
                docker run -d -p 3003:3000 --name order-service order-service
                '''
            }
        }

        stage('product-service'){
            steps{
                sh '''
                docker build -t product-service ./product-service
                docker stop product-service || true
                docker rm product-service || true
                docker run -d -p 3001:3000 --name product-service product-service
                '''
            }
        }

    }
}