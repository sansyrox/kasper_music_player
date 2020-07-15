import webbrowser
import requests
import sys
import bs4
import re
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

class youtube_results:
  def youtube_search(self, q):
    
    res = requests.get("https://www.youtube.com/results?search_query=" + q)
    res.raise_for_status()

    searchSoup = bs4.BeautifulSoup(res.content,features="html.parser")
    videoLinks = searchSoup.select('a.yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.yt-uix-sessionlink.spf-link')

    max_results = min(20,len(videoLinks))
    videos = []
    for i in range(max_results):    
        regex = re.compile(r'/(watch\?v=|embed/|v/|.+\?v=)?(?P<id>[A-Za-z0-9\-=_]{11})')
        VideosId = regex.match(videoLinks[i].get('href'))
        if not VideosId:
            print('no match')
        else:
            videos.append([videoLinks[i].get('title'),VideosId.group('id')])
    return videos

  def youtube_related(self, relatedto_videoid):
    related = requests.get("https://www.youtube.com/watch?v=" + relatedto_videoid)
    print(relatedto_videoid)
    related.raise_for_status()
    searchSoup2 = bs4.BeautifulSoup(related.content,features="html.parser")
    videoLinks2 = searchSoup2.select('a.content-link.spf-link.yt-uix-sessionlink.spf-link')
    max_results2 = min(20,len(videoLinks2))
    rel_videos = []
  
    for i in range(max_results2):    
        regex2 = re.compile(r'/(watch\?v=|embed/|v/|.+\?v=)?(?P<id>[A-Za-z0-9\-=_]{11})')
        VideosId2 = regex2.match(videoLinks2[i].get('href'))
        if not VideosId2:
            print('no match')
        else:
            vid = VideosId2.group('id')
            rel_videos.append([videoLinks2[i].get('title'),VideosId2.group('id'), 'https://img.youtube.com/vi/'+str(vid)+'/0.jpg'])
            
   
    return rel_videos
  
  # 

  def weekly_top(self):
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get("https://www.youtube.com/watch?v=q0hyYWKXF0Q&list=PLI_7Mg2Z_-4I-W_lI55D9lBUkC66ftHMg")
    searchSoup2 = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    video_links = searchSoup2.find_all('ytd-playlist-panel-video-renderer',{'id':'playlist-items'})
    driver.quit()
    video_links = [(i.find('span',{'id':'video-title'}).get('title'),i.find('a').get('href').replace('&','=').split('=')[1][:-1]) for i in video_links]
    print(video_links)
    return video_links


  def recommended_carousel(self):
    # related.raise_for_status()
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get("https://www.youtube.com/watch?v=qVdPh2cBTN0&list=RDqVdPh2cBTN0")
    searchSoup2 = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    video_links = searchSoup2.find_all('ytd-playlist-panel-video-renderer',{'id':'playlist-items'})
    driver.quit()
    video_links = [(i.find('span',{'id':'video-title'}).get('title'),i.find('a').get('href').replace('&','=').split('=')[1][:-1]) for i in video_links]
    print(video_links)
    return video_links