//A carousel of cards that displays the recommended songs
import React,{Component} from 'react'
import Coverflow from 'react-coverflow';

class Carousel extends Component {

  constructor(){
    super();
      this.state = {
          active:0
      }
  }
  render() {
    return (
      <div>        
        <Coverflow
        width="800" height="200"
        displayQuantityOfSide={2}
        navigation={true}
        enableHeading={false}
        active={this.state.active}>
          <div
          role="menuitem"
          tabIndex="0"
          >
          <img src='http://www.persrock.com/wp-content/uploads/persrock_album_cover1.jpg' alt='Album one' />
          </div>
          <img src='https://crank11.news/wp-content/uploads/sites/3/2017/09/bbdf945787a99d48cb840a1038da6d4e.jpg' alt='Album two' data-action="http://passer.cc"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-poster-template-e5f10284ee17bb8c7df5dbb514102ffe.jpg?ts=1477997901' alt='Album three' data-action="https://doce.cc/"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-poster-template-a37f2951c814572c2335ce83827c8f6d.jpg?ts=1477996768' alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7.jpg?ts=1525683542' alt='Album five' data-action="http://www.bbc.co.uk"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/75837b3530be1512f5ac2547607ec163.jpg?ts=1476425796' alt='Album six' data-action="https://medium.com"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-poster-template-56fed9a0cd04b05d859763368f2c9aa4.jpg?ts=1480696161' alt='Album seven' data-action="http://www.google.com"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/angel-rock-music-deep-album-cover-flyer-template-7d032649c4d239531df38a3aa0e6fa3d.jpg?ts=1477670644' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-template-b1ae8f5aeb78c6db2f998de71aa62686.jpg?ts=1522765748' alt='Album two' data-action="http://passer.cc"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-poster-template-2bfa15c444fa2a3b01a2cb6bb7d0c8bd.jpg?ts=1482961160' alt='Album three' data-action="https://doce.cc/"/>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-poster-template-6a8b9507117e85606f0140c879299087.jpg?ts=1477997502' alt='Album four' data-action="http://tw.yahoo.com"/>
        </Coverflow>
      </div>
    );
  }       
}
export default Carousel  