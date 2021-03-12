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
                    <div className='individual-hat' key={index}>
                        <img src={element.img} alt={element.name}/>
                         {/* onClick={() => this.props.addToShelf(index)} */}

                        <p className='hat-title-text'>{element.name}</p>
                    </div>
                    }) 
                }
            </div>
        )
    }


}

export default HatList