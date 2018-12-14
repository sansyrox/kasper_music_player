# youtube_cli_flask
---
>An app that would allow "music.youtube.com" to work in India

NOTE: For the NWoC participants. If you guys find any issue that is not already created, create an issue in the repo and I'll add the difficulty labels accordingly.

## List of contents
- [History](#history)
- [RoadMap](#roadmap)
- [Installation](#installation)
- [Tech Stack](#tech-stack-expected)

## History
[(Back to top)](#list-of-contents)
<p> This project started as a custom media server created using flask and vlc to allow youtube streaming via terminal in search of creating a server even worked on less powerful devices like RaspberryPi.</p>

## RoadMap
[(Back to top)](#list-of-contents)
<p> Currently as for initial Stage, I expect to make a "music.youtube.com" like app that works in India too and plays only mp3 music incorporating Youtube Suggestion too using Youtube API's or scrapping if required. </p>
<p> As of now, the front-end and backend will be in a common repo and would be separated if the app shows some promise. </p>

## Installation
[(Back to top)](#list-of-contents)

### To start the Flask Server
* It is advised to use a `pipenv` as the already installed versions of vlc might interfere with the ones in the dependencies

* Use the command `pip3 install pipenv`

* Now `cd` into server directory via `cd server/`

* Now install the dependenices by using the command `pipenv install`

* To run the server , use the command `pipenv run python3 server.py`

### To start the React Frontent
* Clone the repo using `https://github.com/NJACKWinterOfCode/youtube_cli_flask.git`.

* Then go to the frontend directory using `cd youtube_cli_flask/youtube_mp3_frontend`.

* Install the dependencies using `npm install --save`

* To start the react app, Use `npm start`.

## Tech Stack (Expected)
[(Back to top)](#list-of-contents)

* Currently this is a Flask Backend
* React Frontend (expected) repo.
* For Storing Data , a JSON file be used as of now.
