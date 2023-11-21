pipeline {
    agent any

    environment {
        access_token = credentials('GitHubAccessToken')
    }

    stages {
        stage('Pull and Run') {
            steps {
                script {
                    // Navigate to the docker-microservice directory
                    dir('/home/ubuntu/docker-microservices') {
                        // Use 'withCredentials' to securely pass the GitHub access token
                        withCredentials([string(credentialsId: 'GitHubAccessToken', variable: 'access_token')]) {
                            // Pull the latest changes
                            sh 'git pull origin main'
                            echo 'Pulling latest changes successful'

                            // Print the Docker Compose version for debugging
                            sh 'docker-compose --version'

                            // Build and run Docker containers
                            sh 'docker-compose up -d --build'
                            echo 'Docker Compose up successful'
                        }
                    }
                }
            }
        }
    }
}