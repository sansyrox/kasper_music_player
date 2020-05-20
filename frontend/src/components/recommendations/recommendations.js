import React,{Component} from 'react';
import './Recommendations.css';

class Recommendations extends Component {

    render() {
        
        return (
            <div className='flex'>
            { this.props.recommendations.slice(0,5).map((item,i) => {
                // console.log(item)
            return (
                <article key={i} className="weekly_cont br2 ba mr3 red-font-color b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src={item.img_url} onClick={()=> this.props.updateMusicComponent(item.id, item.title)} className="db w-75 br2 br--top center" alt="album"/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <p className="f5 red-font-color mv1">{item.title}</p>
                            </div>
                        </div>
                        {/* <p id="desc" className="f6 lh-copy measure mt2 red-font-color">
                        Description
                        </p> */}
                    </div>
                </article>
                )
                })
            }
            </div>
        )
    }
}    
export default Recommendations;
