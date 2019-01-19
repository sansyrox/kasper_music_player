//Section of cards to display the top songs
import React,{Component} from 'react'


class WeeklyTop extends Component {

    render() {
        return (
            <div className='flex'>
                <article className="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" className="db w-75 br2 br--top center" alt="album"/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div className="dtc tr">
                                <h2 className="f5 mv0">#1</h2>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 near-white">
                        Description
                        </p>
                    </div>
                </article>
                <article className="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" className="db w-75 br2 br--top center" alt="album"/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div className="dtc tr">
                                <h2 className="f5 mv0">#2</h2>
                             </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 near-white">
                        Description
                         </p>
                        </div>
                </article>
                <article className="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" className="db w-75 br2 br--top center" alt="album"/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div className="dtc tr">
                                <h2 className="f5 mv0">#3</h2>
                            </div>
                         </div>
                    <p className="f6 lh-copy measure mt2 near-white">
                    Description
                    </p>
                    </div>
                </article>
                <article className="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" className="db w-75 br2 br--top center" alt="album"/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div className="dtc tr">
                                <h2 className="f5 mv0">#4</h2>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 near-white">
                         Description
                        </p>
                    </div>
                </article>
            </div>    
        );
    }
}
  
  export default WeeklyTop;
