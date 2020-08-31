# Fitbit API Experiment

## Start of the project

Started by registering an App on https://dev.fitbit.com/
Then used the OAuth 2.0 process
Authorized access to Data of my own Fitbit Device
Recieved Auth Code 
Used Postman to send a HTTP GET Request to https://api.fitbit.com/oauth2/token
In response we recieve an access token in place of our Auth Code
We can now make GET Request's to the Fitbit API using our Access token and recieve data from my Fitbit in response
This site https://dev.fitbit.com/build/reference/web-api/explore/ outlines the request possible to the Fitbit Web API

## Current Challenges:
Access Tokens only last 8 hours before needing to be refreshed, this request is part of a React application how will this Access Token refresh occour?
What data do we wish to use from my Fitbit? and how can we interpret, visualise or utilise the data?


## Accesible Data and Possible Uses:

#### So far through the API I can access the model of my Fitbit and current battery level, thrilling!
<img src="readme-images/Screen Shot 2020-08-31 at 3.39.20 PM.png" width="400">

#### Slightly more interestingly I can access my activity levels on an a specific date, it could be helpful to visualise my daily step count in an creative way.
<br/>
<img src="readme-images/Screen Shot 2020-08-31 at 4.00.07 PM.png" width="400">

### Visualistion of Daily Step Count
