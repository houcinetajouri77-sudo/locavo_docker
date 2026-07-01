pipeline {
    agent any
    
    // On demande à Jenkins de charger l'outil Docker configuré à l'étape 2
    tools {
        dockerTool 'docker-cli'
    }
    
    environment {
        DOCKER_HOST = 'tcp://docker:2376'
        DOCKER_TLS_VERIFY = '1'
        DOCKER_CERT_PATH = '/certs/client'
    }

    stages {
        stage('Clone') {
            steps {
                echo "Récupération du code depuis GitHub..."
            }
        }
        stage('Build Docker') {
            steps {
                echo "Construction de l'image Docker de Locavo..."
                sh "docker build -t locavo-app:latest ."
            }
        }
        stage('Deploy') {
            steps {
                echo "Déploiement de l'application sur la VM..."
            }
        }
    }
}