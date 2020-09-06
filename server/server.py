from flask import Flask , render_template , request
from flask import jsonify
import subprocess   # nosec #pylint-disable type: ignore
import os
import json_config
import pafy
import vlc
from modules import youtube_videos
from modules import coverpy
from flask_cors import CORS
import threading

app = Flask(__name__)

CORS(app)

Instance = vlc.Instance('--no-video')
player = Instance.media_player_new()
url = ''
youtube = youtube_videos.youtube_results()
coverpy = coverpy.CoverPy()

class search_play_recommend:
    def search(self, search_query):
        search = youtube.youtube_search(search_query)
        art = coverpy.art(search_query)
        result = dict([('title', search[0][0]), ('id', search[0][1]), ('album art', art)])
        return(result)

    def play(self, video_id):
        url = 'https://www.youtube.com/watch?v=' + video_id
        video = pafy.new(url)
        streams = video.audiostreams
        best = streams[3]
        playurl = best.url
        # print(playurl)
        return playurl

    def recommend(self, video_id):
        related_result = youtube.youtube_related(video_id)
        print("Realted Resut is", related_result)
        items = []
        for video in related_result:
            print(video)
            items.append(dict([('title', video[0]), ('id', video[1]), ('img_url',video[2])]))
        return items

song = search_play_recommend()

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def w_youtube():
    search_query = request.args.get('vid')
    res = song.search(search_query)
    resp = jsonify(res)
    resp.status_code = 200
    return resp

@app.route('/recommend', methods=['GET'])
def recommended_songs():
    video_id = request.args.get('vid')
    print(video_id)
    recommended = song.recommend(video_id)
    print(recommended)
    res = {"items" : recommended}
    resp = jsonify(res)
    resp.status_code = 200
    return resp

@app.route('/recommend_carousel', methods=['GET'])
def carousel():
    response = youtube.recommended_carousel()
    title,vid = [i[0] for i in response] , [i[1] for i in response]
    print(title,vid)
    display_message = {"titles": title, "videos": vid}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp

@app.route('/weekly_tops', methods=['GET'])
def weekly_tops():
    response = youtube.weekly_top()
    title,vid = [i[0] for i in response] , [i[1] for i in response]
    print(title,vid)
    display_message = {"titles": title, "videos": vid}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp




@app.route('/play', methods=['GET'])
def wo_youtube():
    video_id = request.args.get('vid')
    url = song.play(video_id)
    print(url)
    display_message = {"status":"song started","url":url}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp



# def runFlaskApp1():
    # app.run(host='127.0.0.1', port=7070, debug=True, threaded=True)

if __name__ == '__main__':
    # t1 = threading.Thread(target=runFlaskApp1)
    # t1.start()
    app.run(debug=True)


