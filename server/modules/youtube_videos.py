import webbrowser
import requests
import sys
import bs4
import re
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

class youtube_results:
  def youtube_search(self, q):
    # returns href links of video items
    # requires some effort in making it sync with the client
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get("https://www.youtube.com/results?search_query=" + q) 
    searchSoup = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    videoLinks = searchSoup.find_all('ytd-thumbnail')
    video_links = [(i.find('a').get('href')) for i in videoLinks ]
    video_links = [i for i in video_links if i]
    video_links = [i.split('=')[1] for i in video_links]
    return video_links

  def youtube_related(self, relatedto_videoid):
    """ This is supposed to return the [video title, video id, image url] of the related videos
    """

    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get("https://www.youtube.com/watch?v=" + relatedto_videoid) 
    searchSoup2 = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    videoLinks2 = searchSoup2.find_all('ytd-compact-video-renderer')
    import time
    time.sleep(2)
    rel_videos = []
    for i in videoLinks2:
        video_title = i.find('span',{'id':'video-title'}).get('title')
        video_id = i.find('ytd-thumbnail').find('a',{'id':'thumbnail'}).get('href').replace('&','=').split('=')[1][:-1]
        img_url = f"https://img.youtube.com/vi/{video_id}/0.jpg"

        if video_id and video_title and img_url:
            rel_videos.append((video_title, video_id, img_url))

    print(rel_videos) 
    return rel_videos
  

  def weekly_top(self):
    """This is supposed to return the links of the weekly top hits from my video playlist
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get("https://www.youtube.com/watch?v=q0hyYWKXF0Q&list=PLI_7Mg2Z_-4I-W_lI55D9lBUkC66ftHMg")
    searchSoup2 = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    video_links = searchSoup2.find_all('ytd-playlist-panel-video-renderer',{'id':'playlist-items'})
    video_links = [(i.find('span',{'id':'video-title'}).get('title'),i.find('a').get('href').replace('&','=').split('=')[1][:-1]) for i in video_links]
    print("Video Links are",video_links)
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
  
# youtube_results().weekly_top()
if __name__=="__main__":
    youtube_results().youtube_related('pXRviuL6vMY')
