pipeline {
    agent any

    environment {
        ACCESS_TOKEN = credentials('GitHubAccessToken')
    }

    stages {
        stage('Debug') {
            steps {
                script {
                    echo "Access Token: ${ACCESS_TOKEN}"
                    echo "Current directory: ${pwd()}"
                    echo "List files: ${sh(script: 'ls -la', returnStdout: true).trim()}"
                }
            }
        }

        stage('Pull and Run') {
            steps {
                script {
                    // Mount the Docker socket from the host
                    docker.image('docker').inside('-v /var/run/docker.sock:/var/run/docker.sock') {
                        // Use 'withCredentials' to securely pass the GitHub access token
                        withCredentials([string(credentialsId: 'GitHubAccessToken', variable: 'ACCESS_TOKEN')]) {
                            echo "Absolute path to workspace: ${WORKSPACE}"

                            // Pull the latest changes
                            echo "Access Token: ${ACCESS_TOKEN}"
                            echo "Current directory: ${pwd()}"
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
