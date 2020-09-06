//Section of cards to display the top songs
import React,{Component} from 'react'
import './index-color.css'

const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

class WeeklyTop extends Component {

    constructor(props) {
        super(props)
        this.state= {
            song:[]
        }

        this.fetchWeekly();
    }

    fetchWeekly = async () => {
        let url = BASE_URL + '/weekly_tops';
        let req = await fetch(url);
        let json = await req.json();
        
        let song = json.videos;
        // let title = json.title;
        console.log(json)
        if (song){
            song.forEach((item,idx)=>{
                song[idx] = [item,json["titles"][idx]]
            })
            this.setState({song})
        }
        
        
      }

    handleClick = (item, index) => {
        this.props.onSetInput(item[1])
        this.props.toggleSearch()
    }
    
    render() {
        return (
            <div className='flex'>
                
                {this.state.song.slice(0,5).map((item,index)=>{
                    return (
                        <article key={index} className="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                            <img onClick={(e)=> this.handleClick(item, index)} src={`https://img.youtube.com/vi/${item[0]}/0.jpg`} className="db w-75 br2 br--top center" alt="album"/>
                            <div className="pa2 ph3-ns pb3-ns">
                                <div className="dt w-100 mt1">
                                    <div className="dtc">
                                        <h1 className="f5  mv0 red-font-color">{item[1]}</h1>
                                    </div>
                                    <div className="dtc tr">
                                        <h2 className="f5 mv0 red-font-color"># {index+1}</h2>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}

                
                
            </div>    
        );
    }
}
  
  export default WeeklyTop;
