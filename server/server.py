from flask import Flask , render_template , request
from flask import jsonify
import subprocess   # nosec #pylint-disable type: ignore
import os
import json_config
import pafy
import vlc
from modules import youtube_videos
from modules import coverpy

app = Flask(__name__)   
Instance = vlc.Instance('--no-video')
player = Instance.media_player_new()
url = ''
youtube = youtube_videos.youtube_results()
coverpy = coverpy.CoverPy()

class search_play_recommend:
    def search(self, search_query):
        search = youtube.youtube_search(search_query)
        art = coverpy.art(search_query)
        result = dict([('title', search[1][0]['snippet']['title']), ('id', search[1][0]['id']['videoId']), ('album art', art)])
        return(result)

    def play(self, video_id):
        url = 'https://www.youtube.com/watch?v=' + video_id
        video = pafy.new(url)
        streams = video.audiostreams
        best = streams[3]
        playurl = best.url
        Media = Instance.media_new(playurl)
        Media.get_mrl()
        player.set_media(Media)
        player.play()

    def recommend(self, video_id):
        related_result = youtube.youtube_related(video_id)
        items = []
        for video in related_result[1]:
            items.append(dict([('title', video['snippet']['title']), ('id', video['id']['videoId'])]))
        return items

song = search_play_recommend()



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
    recommended = song.recommend(video_id)
    res = {"items" : recommended}
    resp = jsonify(res)
    resp.status_code = 200
    return resp    

@app.route('/play', methods=['GET'])
def wo_youtube():
    video_id = request.args.get('vid')
    song.play(video_id)
    display_message = {"status":"song started"}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp

@app.route('/pause')
def pause():
    player.pause()
    display_message = {"status":"song paused"}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp

@app.route('/stop')
def stop():
    player.stop()
    display_message = {"status":"song stopped"}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp

@app.route('/restart')
def restart():
    player.stop()
    player.play()
    display_message = {"status":"song restarted"}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp

@app.route('/resume')
def play():
    player.play()
    display_message = {"status":"song resumed"}
    resp = jsonify(display_message)
    resp.status_code = 200
    return resp

if __name__ == '__main__':
    app.run(debug=True,port=7070,host= '0.0.0.0')


