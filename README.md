<img src="Logo/Logo Kasper.jpg" width="350" title="Kasper Logo">

# kasper_music_player 
---
(previously known as youtube_cli_flask)
>An app that would allow "music.youtube.com" to work in India

NOTE (For the NWoC participants): If you guys find any issue that is not already created, you may do the same in the repo and I'll add the difficulty labels accordingly.

## Contents
- [History](#history)
- [RoadMap](#roadmap)
- [Installation](#installation)
- [Tech Stack](#tech-stack-expected)

## History
[(Back to contents👆🏻)](#contents)
<p> This project started as a custom media server created using flask and vlc. It aims to allow youtube streaming via terminal in search of creating a server.Even worked on less powerful devices like RaspberryPi.</p>

## RoadMap
[(Back to contents👆🏻)](#contents)
<p> Currently, as for the initial stage, I expect to make an app "music.youtube.com" that works in India too and plays only mp3 music. The app will incorporate Youtube Suggestions as well, using Youtube API's or scrapping if required. </p>
<p> As of now, the front-end and backend are in a common repository and will be separated if the app shows some promise. </p>

## Installation
[(Back to contents👆🏻)](#contents)

### To start the Flask Server
* Install vlc if not installed already (`sudo apt-get install vlc` for Debian & `sudo snap install vlc` for Ubuntu)

* It is advised to use a `pipenv` as the preinstalled versions of vlc might interfere with the ones in the dependencies

* Use the command `pip3 install pipenv`

* Now, `cd` into the server directory via `cd server/`

* Next, install the dependenices by using the command `pipenv install`

* Before running the server, get your YouTube API key by following this guide -                https://developers.google.com/youtube/v3/getting-started

* Use your own API key by modifying line 5 in [this](server/youtube_videos.py) file.

* To run the server , use the command `pipenv run python3 server.py`

### To start the React Frontend
* Clone the repository using `git clone https://github.com/NJACKWinterOfCode/youtube_cli_flask.git`.

* Then go to the frontend directory using `cd youtube_cli_flask/youtube_mp3_frontend`.

* Install the dependencies using `npm install --save`

* Install tachyons using `npm install tachyons`

* Install react-coverflow using `npm install react-coverflow`

* To start the react app, use `npm start`.

## Tech Stack (Expected)
[(Back to contents👆🏻)](#contents)

* Currently this is a Flask Backend.
* React Frontend (expected) repo.
* For Storing Data , a JSON file is being used as of now.

<p align="center"> Made with ❤ by <a href="https://github.com/stealthanthrax">Sanskar Jethi</a></p>
