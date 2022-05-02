import 'key.css';
function Key() {
    return (
        <button className='keyButton' onClick={this.props.onClick}></button>
    )
}
export default Key;