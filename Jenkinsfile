properties = null     

def loadProperties() {
    node {
        checkout scm
        properties = new Properties()
		if(env.branch == "devlop")
        File propertiesFile = new File("${workspace}/Devlop.properties")
		if(env.branch == "master")
        File propertiesFile = new File("${workspace}/master.properties")
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
                //echo "Later one ${properties.REST_API_URL}"
				sed -i "s/REST_API_URL=.*/REST_API_URL=${properties.REST_API_URL}/" .env
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
                //echo "Later one ${properties.REST_API_URL}"
				sed -i "s/REST_API_URL=.*/REST_API_URL=${properties.REST_API_URL}/" .env
            }
			sh 'npm install'
           // sh 'npm start'
            println env.BRANCH_NAME
        }
	}
  }
}
