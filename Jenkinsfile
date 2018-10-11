properties = null     

def loadProperties() {
    node {
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
            sh 'npm start'
            
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
			    def props = readProperties file: 'master.properties'
				def Var1= props['REST_API_URL']
				echo Var1
               // loadProperties()
            }
			sh 'npm install'
            // sh """ sed -i "/REST_API_URL/cREST_API_URL = \\"$properties.REST_API_URL\\"" .env """
        }
	}
  }
}
