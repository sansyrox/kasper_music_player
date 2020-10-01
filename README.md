<img src="Logo/logo.png" width="250" title="Kasper Logo">

# Kasper Music Player 
---
Why Kasper? <br>
As It is the name of my dog and it rhymes with the iconic app Napster.


It is a music streaming app which allows free music streaming for all and bypasses the youtube music algorithm to work even in restricted countries.

## Contents
- [# Kasper Music Player](#kasper-music-player)
- [Contents](#contents)
- [History](#history)
- [RoadMap](#roadmap)
- [Installation](#installation)
  - [To start the Flask Server](#to-start-the-flask-server)
  - [To start the React Frontend](#to-start-the-react-frontend)
- [Tech Stack (Expected)](#tech-stack-expected)

## History
[(Back to contents👆🏻)](#contents)
<p> This project started as a custom media server created using flask and vlc to allow youtube streaming via terminal in search of creating a server. Even worked on less powerful devices like RaspberryPi.</p>

## RoadMap
[(Back to contents👆🏻)](#contents)

UI Refactor(Including Audio Player) -> Add Travis -> Connect a DataBase(FireBase, until a better option available) -> Add API for PlayLists -> Likes -> Support For Different Platforms

## Installation
[(Back to contents👆🏻)](#contents)

### To start the Flask Server

* It is advised to use a `pipenv` as the already installed versions of vlc might interfere with the ones in the dependencies

* Use the command `pip3 install pipenv`

* Now go into server directory using the command `cd server/`

* Next, install the dependenices by using the command `pipenv install`

* Before running the server, get your YouTube API key by following this guide -                https://developers.google.com/youtube/v3/getting-started


* To run the server, use the command `pipenv run python3 server.py`

### To start the React Frontend

* Open terminal to get started.

* To clone the repo, type `git clone https://github.com/NJACKWinterOfCode/youtube_cli_flask.git` in your terminal.

* Then go to the frontend directory using `cd youtube_cli_flask/youtube_mp3_frontend`.

* Install the dependencies using `npm install --save`

* Install tachyons using `npm install tachyons`

* Install react-coverflow using `npm install react-coverflow`

* To start the react app, Use `npm start`.

* Now the app would have started on your default browser!!

## Tech Stack (Expected)
[(Back to contents👆🏻)](#contents)

* Flask Backend
* React Frontend.
* Firebase Auth and DB.

<p align="center"> Made with ❤ by <a href="https://github.com/stealthanthrax">Sanskar Jethi</a></p>
