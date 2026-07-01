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
                // On spécifie le chemin du Dockerfile (-f) et le dossier racine du build (locavo-docker/)
                sh "docker build -t locavo-app:latest -f locavo-docker/Dockerfile locavo-docker/"
            }
        }
        stage('Deploy') {
            steps {
                echo "Déploiement de l'application sur la VM..."
            }
        }
    }
}