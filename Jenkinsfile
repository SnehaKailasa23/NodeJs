pipeline {
  agent any
    
  stages {  
    stage('Clone') 
	{
      steps 
	  {
        checkout scm
      }
    }
    stage('Develop') 
	{
		when 
		{
			anyOf 
			{
			branch 'develop';
			}
		}
		steps 
		{
		    def props = readProperties  file: 'Devlop.properties'
			println props["REST_API_URL"]
			sh 'npm install'
           // sh 'npm start'
            println env.BRANCH_NAME
        }
	}
	stage('Release') 
	{
		when 
		{
			anyOf 
			{
			branch 'master';
			}
		}
		steps 
		{
			sh 'npm install'
           // sh 'npm start'
            println env.BRANCH_NAME
        }
	}
  }
}
