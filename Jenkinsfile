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
                // Cette commande va lire le Dockerfile à la racine de ton projet
                sh "docker build -t locavo-app:latest ."
            }
        }
        stage('Deploy') {
            steps {
                echo "Déploiement de l'application sur la VM..."
                // Pour l'instant on simule, on gérera le conteneur au prochain build
            }
        }
    }
}