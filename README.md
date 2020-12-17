Prerequisits:
* Node JS
* port 5000 to be empty
* Browser
To start the application run these 2 commands
`yarn install`
`yarn start`

The app is also host on heroku to access it visit: https://codahackerearth.herokuapp.com/
It's reunning on free dyno. So, it might take upto 15sec for first load. Once, it's loaded it would work without any delay.
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