import {Component} from "react";
import './screen.css';
export default class Screen extends Component {
    render() {
        return(
            <input type="text"
            placeholder="Введите выражение"
            className="screen"
            onChange={(e)=>this.props.onScreenChange(e.currentTarget.value)}
            value={this.props.text}/>
        )
    }
}