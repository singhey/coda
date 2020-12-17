Prerequisits:
* Node JS
* port 5000 to be empty
* Browser
In the file named .env in root directory of the file replace `MONGO_URL` with your mongodb server url and port number. So, that the app could communicate with server and write data in it.

To start the application run these 2 commands
`yarn install`
`yarn start`

The app is also hosted on heroku to access it visit: https://codahackerearth.herokuapp.com/
It's running on free dyno. So, it might take upto 15sec for first load. Once, it's loaded it would work without any delay.
To access source code visit: https://github.com/singhey/coda

Features:
* Table sorting based on (loss, wins, tie, name, score) to sort it, click on the header
* search based on team name
* Pairing of teams and competing them
* Track of paired time with time stamps and record of winners and losers
* Pagination of all teams and their competitions
* Theme! because, life's boring without a dark theme.
* SOrting based on highest score player


Stackes used for making this app:
Frontend: React, Relay, redux
Backedn: NodeJS, graphql, Mongodb
Hostend on: Heroku, Atlas Server(database)