import './keypad.css'
import React from 'react'
export default class Keypad extends React.Component {
    render() {
        return (
            <div className="keypad">
            <button  onClick={this.props.clearAll} className="bt bt-clear">AC</button>
            <button  onClick={this.props.clear} className="bt bt-clear">CE</button>
            <button  onClick={()=>this.props.typeText('*')} className="bt bt-functional">*</button>
            <button  onClick={()=>this.props.typeText('/')} className="bt bt-functional">/</button>
    
            <button  onClick={()=>this.props.typeText('7')} className="bt">7</button>
            <button  onClick={()=>this.props.typeText('8')} className="bt">8</button>
            <button  onClick={()=>this.props.typeText('9')} className="bt">9</button>
            <button  onClick={()=>this.props.typeText('+')} className="bt bt-plus">+</button>
            <button className="bt bt-functional">+</button>
    
            <button  onClick={()=>this.props.typeText('4')} className="bt">4</button>
            <button  onClick={()=>this.props.typeText('5')} className="bt">5</button>
            <button  onClick={()=>this.props.typeText('6')} className="bt">6</button>
            <button className="bt bt-functional">-</button>
    
            <button  onClick={()=>this.props.typeText('1')} className="bt">1</button>
            <button  onClick={()=>this.props.typeText('2')} className="bt">2</button>
            <button  onClick={()=>this.props.typeText('3')} className="bt">3</button>
            <button  onClick={()=>this.props.typeText('-')} className="bt bt-functional">-</button>
    
            <button  onClick={()=>this.props.typeText('.')} className="bt">.</button>
            <button  onClick={()=>this.props.typeText('0')} className="bt">0</button>
            <button  onClick={()=>this.props.typeText('(')} className="bt bt-functional">(</button>
            <button  onClick={()=>this.props.typeText(')')} className="bt bt-functional">)</button>
    
            <button  onClick={()=>this.props.typeText('√')} className="bt bt-functional">√</button>
            <button  onClick={()=>this.props.typeText('π')} className="bt bt-functional">π</button>
            <button  onClick={()=>this.props.typeText('=')} className="bt bt-equal">=</button>
        </div>
        )
    }
}