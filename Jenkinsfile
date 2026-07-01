pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo "Récupération du code depuis GitHub..."
            }
        }
        stage('Build Docker') {
            steps {
                echo "Construction de l'image Docker de Locavo..."
                sh "docker build -t locavo-app:latest -f locavo-docker/Dockerfile locavo-docker/"
            }
        }
        stage('Deploy') {
            steps {
                echo "Déploiement de l'application avec Docker Compose..."
                // On va dans le dossier et on recrée le conteneur en arrière-plan (-d)
                sh "cd locavo-docker && docker-compose up -d --force-recreate"
            }
            }
        }
    }
}