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
                echo "Déploiement de l'application..."
                // On ignore les erreurs s'il n'y a pas d'ancien conteneur à arrêter/supprimer (|| true)
                sh "docker stop locavo-container || true"
                sh "docker rm locavo-container || true"
                
                // On lance le nouveau conteneur sur le port 80 (ou change le premier 80 par ton port souhaité)
                sh "docker run -d --name locavo-container -p 80:80 locavo-app:latest"
            }
        }
    }
}