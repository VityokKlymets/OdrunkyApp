import React from 'react';
import img from '../Content/Images/elizabet-olsen-elizabeth-2203.jpg'
class Foreword extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            image : {
                src :img,
                caption : "Директор школи"
            },
            foreText : "Six started far placing saw respect females old. Civilly why how end viewing attempt related enquire visitor. Man particular insensible celebrated conviction stimulated principles day. Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh. Is time from them full my gone in went. Of no introduced am literature excellence mr stimulated contrasted increasing. Age sold some full like rich new. Amounted repeated as believed in confined juvenile. "
        }
    }

    render(){
        return (
            <div className="Foreword">
                <div className="foreBlock">
                    <p>{this.state.foreText}</p>
                    <figure>
                        <img src={this.state.image.src}></img>
                        <figcaption>{this.state.image.caption}</figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}

export default Foreword;