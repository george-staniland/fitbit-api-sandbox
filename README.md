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

Current Challenges:
Access Tokens only last 8 hours before needing to be refreshed, this request is part of a React application how will this Access Token refresh occour?
What data do we wish to use from my Fitbit? and how can we interpret, visualise or utilise the data?
