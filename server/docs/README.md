# Server
---
>backend for this app, made using Flask.

## List of APIs/libraries used
- [Pafy](#Pafy)
- [VLC](#VLC)
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

### youtube-dl
This is needed by Pafy.



## The server - 

The route() decorator tells Flask what URL should trigger which function, currently the URLs are -

1. `/` - this just renders the index.html
2. `/song` - here we get the 11 character video_id and append it to the url, to retrieve the YouTube video, select the highest bitrate audio stream, and play it in VLC in audio only mode. Finally we send response 'song started' (in JSON format) with 'OK' status code(200) to the front end.
3. `/pause` - pause the song
4. `/stop` - stop the song
5. `/restart` - restart the song using stop and play
6. `/resume` - resumed the song using play

We run the Flask server in debug mode at port 7070, host 0.0.0.0





