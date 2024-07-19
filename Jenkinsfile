pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        GIT_CREDENTIALS_ID = 'Credential_ID' // Remplacez par l'ID de vos credentials Jenkins
    }
    
    // triggers {
    //     cron('H/5 * * * *') // Planification pour exÃ©cuter toutes les 5 minutes
    // }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the 'dev' branch
                    checkout([$class: 'GitSCM', branches: [[name: '*/dev']], 
                              doGenerateSubmoduleConfigurations: false, 
                              extensions: [], submoduleCfg: [], 
                              userRemoteConfigs: [[credentialsId: env.GIT_CREDENTIALS_ID, url: 'https://github.com/Axel-EIN/atelier-jenkins-livres.git']]])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies for both frontend and backend
                    dir('front-end') {
                        bat 'npm install'
                    }
                    dir('back-end') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests for both frontend and backend
                    dir('front-end') {
                        echo 'sur le front'
                        
                    }
                    dir('back-end') {
                        echo 'sur le back'
                        bat 'npm test'
                    }
                }
            }
        }

        
    }

    
    post {
        success {
            script {
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], 
                              doGenerateSubmoduleConfigurations: false, 
                              extensions: [], submoduleCfg: [], 
                              userRemoteConfigs: [[credentialsId: env.GIT_CREDENTIALS_ID, url: 'https://github.com/Axel-EIN/atelier-jenkins-livres.git']]])

                echo 'Tests succeeded, merging dev into main'
                withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIALS_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    bat """
                        git config --global user.email "axel.ein@gmail.com"
                        git config --global user.name "Axel-EIN"
                        git checkout main
                        git pull origin main
                        git merge origin/dev
                        git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Axel-EIN/atelier-jenkins-livres.git main
                    """
                }
            }
        }
        failure {
            echo 'Tests failed, merge to main aborted.'
        }
        always {
            echo 'Cleaning up workspace'
            cleanWs()
        }
    }
}