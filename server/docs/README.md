# Server
---
>backend for this app, made using Flask.

## List of APIs/libraries used
- [Pafy](#Pafy)
- [VLC](#VLC)
- [YouTubeData](#YouTubeData)
- [youtube-dl](#youtube-dl)

### Pafy

A Python library to download YouTube content and retrieve metadata, objects can be two types in pafy, either a Pafy object or a stream object.

- `pafy.new(video_url)` - creates a new Pafy object, takes the YouTube video URL(str) as the         argument.

- `Pafy_object.audiostreams` - returns a list of audio only streams with their bitrate, the 3rd      stream is usually with the best bitrate (256Kbps).

- `Stream_object.url` - returns the direct access URL of the stream.


### VLC

This is the libvlc which is behind VLC, we can use this to play, control our music.

- `vlc.Instance('--no-video')` - creates a new instance of Instance(Instance is a class), with       argument no-video (str), i.e., only audio.

- `Instance.media_player_new()` - Create a new MediaPlayer instance with the defualt instance.

- `Instance.media_new(url)` - Create a new Media instance, takes the URL of the media as             argument.

- `Instance.media.get_mrl()` - Get the media resource locator (mrl) from a media object.

- `Instance.media_player.set_media(Media)` - Set the media that will be used by the media_player.    If any, previous media will be released, takes the media as argument.

- `Instance.media_player.play()` - play the media

- `Instance.media_player.pause()` - pause the media

- `Instance.media_player.stop()` - stop the media from playing


### [YouTubeData](../youtube_videos.py)

This is YouTube's Data API to enable searching videos in YouTube, the following two functions are part of the class `youtube_results`

- `youtube_search(searchquery)` - takes searchquery(str) as input and gives a JSON response,         which is a tuple of length 2, the first item is some 6 character string, and the second is a      list of 50(can be modified) items, each item is a dict with the following structure - 

    ```JSON
    {
    "kind": "youtube#searchResult",
    "etag": etag,
    "id": {
        "kind": string,
        "videoId": string,
        "channelId": string,
        "playlistId": string
    },
    "snippet": {
        "publishedAt": datetime,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": {
        (key): {
            "url": string,
            "width": unsigned integer,
            "height": unsigned integer
        }
        },
        "channelTitle": string,
        "liveBroadcastContent": string
    }
    }
    ```
- `youtube_related(related_to_videoid)` - gives a JSON response, same as the above, this has         a list of 20(can be modified) videos related to the given video_id(str)


### youtube-dl

This is needed by Pafy.



## [The server](../server.py) - 

### Classes in server - 

#### search_play_recommend

Functions in this class - 

- `search(search_query)` - uses `youtube_search(searchquery)` to get the list of videos and          returns the video_id of the first video in the list.

- `play(video_id)` - takes video_id(str) as input, generates the URL, and plays the highest          available bitrate audio stream in VLC audio only mode, using pafy and vlc.

- `recommend(video_id)` - takes video_id(str) as input, uses `youtube_related(video_id)` to get      the list of related videos, then it creates and returns a list of videos where each item is       a dict as shown -   

    ```JSON
    {
    "id": str,
    "title": str, 
    }
    ```


The route() decorator tells Flask what URL should trigger which function, currently the URLs are -

1. `/` - this just renders the index.html
2. `/song` - here we get the search query from the front end, search for the song, play the song      and recommmend 20 more songs. Finally we send response 'song started' along with the list of      recommended songs (in JSON format) with 'OK' status code(200) to the front end.
3. `/pause` - pause the song
4. `/stop` - stop the song
5. `/restart` - restart the song using stop and play
6. `/resume` - resumed the song using play

We run the Flask server in debug mode at port 7070, host 0.0.0.0





