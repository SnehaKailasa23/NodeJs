pipeline {
  agent any
    
  stages {  
    stage('Clone') {
      steps {
        checkout scm
      }
    }
    stage('build') {
	    when {
        anyOf {
          branch 'devlop';
        }
      }
	  steps {
	    sh 'npm install'
           // sh 'npm start'
            println env.BRANCH_NAME
       }
	}
  }
}
