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
                // Syntaxe robuste avec le tiret pour éviter les erreurs de drapeaux de la CLI
                sh "cd locavo-docker && docker-compose up -d --force-recreate"
            }
        }
    }
}