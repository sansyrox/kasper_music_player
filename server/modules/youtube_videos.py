import webbrowser
import requests
import sys
import bs4
import re
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options


class youtube_results:
  def __init__(self):
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    self.driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)



  def youtube_search(self, q):
    # returns href links of video items
    # requires some effort in making it sync with the client
    driver = self.driver
    driver.get("https://www.youtube.com/results?search_query=" + q) 
    searchSoup = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    videoLinks = searchSoup.find_all('ytd-video-renderer')
    video_links = []
    for i in videoLinks:
        if not i:
            continue

        lowest_common_ancesstor_of_title_and_vid = i.find('h3')

        title = lowest_common_ancesstor_of_title_and_vid.find('a',{'id': 'video-title'}).get('title')
        vid = lowest_common_ancesstor_of_title_and_vid.find('a', {'id':'video-title'}).get('href').split('=')[1].split('&')[0]
        video_links.append((title, vid))

    return video_links

  def youtube_related(self, relatedto_videoid):
    """ This is supposed to return the [video title, video id, image url] of the related videos
    """
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)
    driver.get("https://www.youtube.com/watch?v=" + relatedto_videoid) 
    searchSoup2 = bs4.BeautifulSoup(driver.page_source,features="html.parser")

    videoLinks2 = searchSoup2.find_all('ytd-compact-video-renderer')
    rel_videos = []
    # print("Video Links are", videoLinks2)
    for i in videoLinks2:
        video_title = i.find('span',{'id':'video-title'}).get('title')
        video_id = i.find('ytd-thumbnail').find('a',{'id':'thumbnail'}).get('href').replace('&','=').split('=')[1]
        img_url = f"https://img.youtube.com/vi/{video_id}/0.jpg"

        if video_id and video_title and img_url:
            rel_videos.append((video_title, video_id, img_url))

    print(rel_videos) 
    return rel_videos
  

  def weekly_top(self):
    """This is supposed to return the links of the weekly top hits from my video playlist
    """
    driver = self.driver
    driver.get("https://www.youtube.com/watch?v=q0hyYWKXF0Q&list=PLI_7Mg2Z_-4I-W_lI55D9lBUkC66ftHMg")
    searchSoup2 = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    video_links = searchSoup2.find_all('ytd-playlist-panel-video-renderer',{'id':'playlist-items'})
    video_links = [(i.find('span',{'id':'video-title'}).get('title'),i.find('a').get('href').replace('&','=').split('=')[1]) for i in video_links]
    print("Video Links are",video_links)
    return video_links


  def recommended_carousel(self):
    """This function returns the list of (video-title and video id)
    """
    driver = self.driver
    driver.get("https://www.youtube.com/watch?v=qVdPh2cBTN0&list=RDqVdPh2cBTN0")
    searchSoup2 = bs4.BeautifulSoup(driver.page_source,features="html.parser")
    video_links = searchSoup2.find_all('ytd-playlist-panel-video-renderer',{'id':'playlist-items'})
    video_links = [(i.find('span',{'id':'video-title'}).get('title'),i.find('a').get('href').replace('&','=').split('=')[1]) for i in video_links]
    print(video_links)
    return video_links
  
# youtube_results().weekly_top()
# if __name__=="__main__":
# youtube_results().youtube_related('pXRviuL6vMY')
