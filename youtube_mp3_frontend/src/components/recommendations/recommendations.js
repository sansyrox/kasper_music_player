import React,{Component} from 'react';

class Recommendations extends Component {

    render() {
        return (
            <div class='flex'>
            { this.props.recommendations.slice(0,5).map((item) => {
            return (
                <article class="weekly_cont br2 ba mr3 white b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" class="db w-75 br2 br--top center" alt="album"/>
                    <div class="pa2 ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <p class="f5 white mv1">{item.title}</p>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 near-white">
                        Description
                        </p>
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
