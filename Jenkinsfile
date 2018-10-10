properties = null     
def loadProperties() {
    node {
        checkout scm
        properties = new Properties()
        File propertiesFile = new File("${workspace}/Devlop.properties")
        properties.load(propertiesFile.newDataInputStream())
        echo "Immediate one ${properties.REST_API_URL}"
    }
}
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
		    script 
			{
                loadProperties()
                echo "Later one ${properties.REST_API_URL}"
            }
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
		    script 
			{
                loadProperties()
                echo "Later one ${properties.REST_API_URL}"
            }
			sh 'npm install'
           // sh 'npm start'
            println env.BRANCH_NAME
        }
	}
  }
}
