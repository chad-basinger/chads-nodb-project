import { render } from '@testing-library/react'
const { Component } = require("react")
const hats = require('../hats.js')

class HatList extends Component{
    constructor(){
        super();
    }
    
    render(){
        console.log(hats)
        return (
            <div>
                
            </div>
            // <div className='hats'>
            //     { hats.map((element, index) => (
            //         <div className='individual-hat' key={index}>
            //             <img src={element.img} alt={element.name}/>
            //              {/* onClick={() => this.props.addToShelf(index)} */}

            //             <p className='hat-title-text'>{element.name}</p>
            //         </div>
            //     )) }
            // </div>
        )
    }


}

export default HatList