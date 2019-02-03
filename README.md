<img src="Logo/logo.png" width="250" title="Kasper Logo">

# Kasper Music Player 
---
(previously known as youtube_cli_flask)
>An app that would allow "music.youtube.com" to work in India and other restricted countries

NOTE (For the NWoC participants): If you guys find any issue that is not already created, create an issue in the repo and I'll add the difficulty labels accordingly.

## Contents
- [# Kasper Music Player](#kasper-music-player)
- [Contents](#contents)
- [History](#history)
- [RoadMap](#roadmap)
- [Installation](#installation)
  - [To start the Flask Server](#to-start-the-flask-server)
  - [To start the React Frontent](#to-start-the-react-frontent)
- [Tech Stack (Expected)](#tech-stack-expected)

## History
[(Back to contents👆🏻)](#contents)
<p> This project started as a custom media server created using flask and vlc to allow youtube streaming via terminal in search of creating a server. Even worked on less powerful devices like RaspberryPi.</p>

## RoadMap
[(Back to contents👆🏻)](#contents)
<p> Currently as for initial Stage, I expect to make a "music.youtube.com" like app that works in India too and plays only mp3 music. Incorporating Youtube Suggestion too, it uses Youtube API's or scrapping if required. </p>
<p> As of now, the front-end and backend are be in a common repo and will be separated if the app shows some promise. </p>

UI Refactor(Including Audio Player) -> Add Travis-> Try to get Cover Art(Try Spotify API) -> Connect a DataBase(FireBase, until a better option available) -> Add Authentication -> Add API for PlayLists -> Likes -> Support For Different Platforms

## Installation
[(Back to contents👆🏻)](#contents)

### To start the Flask Server
* Install vlc if not done already (`sudo apt-get install vlc` for Debian & `sudo snap install vlc` for Ubuntu)

* It is advised to use a `pipenv` as the already installed versions of vlc might interfere with the ones in the dependencies

* Use the command `pip3 install pipenv`

* Now `cd` into server directory via the `cd server/`

* Next, install the dependenices by using the command `pipenv install`

* Before running the server, get your YouTube API key by following this guide -                https://developers.google.com/youtube/v3/getting-started

* Use your own API key by modifying line 5 in [this](server/youtube_videos.py) file.

* To run the server, use the command `pipenv run python3 server.py`

### To start the React Frontent
* Clone the repo using `git clone https://github.com/NJACKWinterOfCode/youtube_cli_flask.git`.

* Then go to the frontend directory using `cd youtube_cli_flask/youtube_mp3_frontend`.

* Install the dependencies using `npm install --save`

* Install tachyons using `npm install tachyons`

* Install react-coverflow using `npm install react-coverflow`

* To start the react app, Use `npm start`.

## Tech Stack (Expected)
[(Back to contents👆🏻)](#contents)

* Currently this is a Flask Backend
* React Frontend (expected) repo.
* For Storing Data , a JSON file will be used as of now.

<p align="center"> Made with ❤ by <a href="https://github.com/stealthanthrax">Sanskar Jethi</a></p>
