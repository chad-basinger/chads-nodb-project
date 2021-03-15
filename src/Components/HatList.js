import React, {Component} from 'react'

class HatList extends Component{
    constructor(props){
        super(props);

        
    }
    
    render(){
        console.log(this.props.hat)
        return (
            
            <div className='hats'>
                { this.props.hat.map((element, index) => {
                    return (
                    <div className='individual-hat' key={index}>
                        <img src={element.img} alt={element.name}
                         onClick={() => window.open(element.url)}/>

                        <span className='hat-title-text'>{element.name}</span>
                        <span className='hat-price'>{element.price}</span>
                    </div>
                )}) 
                }
            </div>
        )
    }


}

export default HatList