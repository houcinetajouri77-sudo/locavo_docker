pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Récupération du code depuis GitHub...'
            }
        }
        stage('Build Docker') {
            steps {
               echo 'Construction de l\'image Docker de Locavo...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Déploiement de l'application sur la VM...'
            }
        }
    }
}