import React from 'react';
class Slider extends React.Component{
    constructor(props)
    {
        super(props);
        this.Images = props.Images;
        this.state =
        {
            currentImage : 0
        }
    }
    nextImage(){
        let newValue = this.state.currentImage + 1 < this.Images.length ? this.state.currentImage+1 : 0;
        this.setState({
            currentImage : newValue
        })
    }
    setImage(index){
        this.setState({
            currentImage : index
        })
    }
    render(){
        let Slides = this.Images.map((elem,idx)=>{
            return <img key={idx} src={elem} className={ this.state.currentImage === idx ? 'active' : null} />
        })
        return (
            <div className="Slider">
                <div className="slide">
                       {Slides}
                    <div className="controls">
                                {this.Images.map((ignore,idx)=>{
                                return <button onClick={()=>(this.setImage(idx))} key={ idx }  className={this.state.currentImage === idx ? 'active' : null}></button>
                      })}
                </div>
                </div>
            </div>
        )
    }
}
export default Slider;