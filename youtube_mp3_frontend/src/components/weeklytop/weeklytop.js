//Section of cards to display the top songs
import React,{Component} from 'react'

const handleClick = (name)  => {
    };

class WeeklyTop extends Component {

    render() {
        return (
            <div class='flex'>
                <article class="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" class="db w-75 br2 br--top center" alt="album"/>
                    <div class="pa2 ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div class="dtc tr">
                                <h2 class="f5 mv0">#1</h2>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 near-white">
                        Description
                        </p>
                    </div>
                </article>
                <article class="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" class="db w-75 br2 br--top center" alt="album"/>
                    <div class="pa2 ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div class="dtc tr">
                                <h2 class="f5 mv0">#2</h2>
                             </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 near-white">
                        Description
                         </p>
                        </div>
                </article>
                <article class="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" class="db w-75 br2 br--top center" alt="album"/>
                    <div class="pa2 ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div class="dtc tr">
                                <h2 class="f5 mv0">#3</h2>
                            </div>
                         </div>
                    <p class="f6 lh-copy measure mt2 near-white">
                    Description
                    </p>
                    </div>
                </article>
                <article class="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" class="db w-75 br2 br--top center" alt="album"/>
                    <div class="pa2 ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0">Album Name</h1>
                            </div>
                            <div class="dtc tr">
                                <h2 class="f5 mv0">#4</h2>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 near-white">
                         Description
                        </p>
                    </div>
                </article>
            </div>    
        );
    }
}
  
  export default WeeklyTop;
