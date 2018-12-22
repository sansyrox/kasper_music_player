from apiclient.discovery import build
from apiclient.errors import HttpError


DEVELOPER_KEY = "PASTE_YOUR_API_KEY_HERE"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

class youtube_results:
  def youtube_search(self, q, max_results=50,order="relevance", token=None, location=None, location_radius=None):

    youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=DEVELOPER_KEY)

    search_response = youtube.search().list(
      q=q,
      type="video",
      pageToken=token,
      order = order,
      part="id,snippet",
      maxResults=max_results,
      location=location,
      locationRadius=location_radius

    ).execute()

    videos = []

    for search_result in search_response.get("items", []):
      if search_result["id"]["kind"] == "youtube#video":
        videos.append(search_result)

    try:
      nexttok = search_response["nextPageToken"]
      return(nexttok, videos)
  
    except Exception as e:
      nexttok = "last_page"
      return(nexttok, videos)


  def youtube_related(self, relatedto_videoid, max_results=20,order="relevance", token=None, location=None, location_radius=None):

    youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
      developerKey=DEVELOPER_KEY)

    search_response = youtube.search().list(
      relatedToVideoId = relatedto_videoid,
      type="video",
      pageToken=token,
      order = order,
      part="id,snippet",
      maxResults=max_results,
      location=location,
      locationRadius=location_radius

    ).execute()


    videos = []

    for search_result in search_response.get("items", []):
      if search_result["id"]["kind"] == "youtube#video":
        videos.append(search_result)

    try:
      nexttok = search_response["nextPageToken"]
      return(nexttok, videos)

    except Exception as e:
      nexttok = "last_page"
      return(nexttok, videos)

