//A carousel of cards that displays the recommended songs
import React,{Component} from 'react'
import Coverflow from 'react-coverflow';
import './Carousel.css';

const BASE_URL = "https://api.beatnik.world/";

class Carousel extends Component {

  constructor(props){
    super(props);
      
      this.state = {
          active:0,
          title: [],
          v_id: []
      }
      this.fetchCarousel();
      // console.log(this.props.data);
  }

  fetchCarousel = async () => {
    let url = BASE_URL + '/recommend_carousel';
    console.log(url)
    let req = await fetch(url);
    let json = await req.json();
    // console.log(json)

    this.setState({"title": json.titles, "v_id":json.videos})
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  handle(idx) {
    this.props.onSetInput(this.state.title[idx])

    // console.log(this.state)
    this.props.toggleSearch()

  }

  render() {
    return (
      <div id="carousel">        
      {/* {`${this.props.data}`} */}
        <Coverflow
        width="800" height="400"
        displayQuantityOfSide={2}
        navigation={true}
        enableHeading={false}
        active={this.state.active}>
          {/* <div
          role="menuitem"
          tabIndex="0"
          >
          <img src='http://www.persrock.com/wp-content/uploads/persrock_album_cover1.jpg' alt='Album one' />
          </div> */}

          {this.state.v_id.slice(0,5).map((item, idx)=>{
            return(
              <div role="menuItem" tabIndex={idx}>
                <img key={idx} src={`https://img.youtube.com/vi/${item}/0.jpg`} alt='Album two' onClick={(e)=>{this.handle(idx)}} />
              </div>
              
            )
          })}
          
          
        </Coverflow>
      </div>
    );
  }       
}
export default Carousel;