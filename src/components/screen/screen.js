import {Component} from "react";
import './screen.css';
class Screen extends Component {
    render() {
        return(
            <div className="screen-wrapper">
                <input type="text"
                placeholder="Введите выражение"
                className="screen"
                onChange={(e)=>this.props.onScreenChange(e.currentTarget.value)}
                value={this.props.text}/>
            </div>
            
        )
    }
}
export default Screen;