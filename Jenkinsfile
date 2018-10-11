properties = null     

def loadProperties() {
    node {
	cleanWs()
        checkout scm
        properties = new Properties()
		File propertiesFile = new File("${workspace}/Devlop.properties")
		if(env.branch == "devlop")
        propertiesFile = new File("${workspace}/Devlop.properties")
		if(env.branch == "master")
        propertiesFile = new File("${workspace}/master.properties")
        properties.load(propertiesFile.newDataInputStream())
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
            }
			sh 'npm install'
			echo "#############22222222########"
			sh """echo $properties.REST_API_URL"""
			sh 'cat .env'
			sh """sed -i "s/REST_API_URL=*/REST_API_URL=\"$properties.REST_API_URL\"/" .env"""
			sh 'cat .env'
        }
	}
  }
}
