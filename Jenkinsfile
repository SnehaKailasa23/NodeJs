pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Clone') {
      steps {
        checkout scm
      }
    }
    stage('build') {
	  steps {
	    sh 'npm install'
//      sh 'npm start'
       }
	}
  }
}
