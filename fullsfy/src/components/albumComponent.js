import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
	
class AlbumComponent extends Component {
    constructor(props){
        super(props)
            
        // Set initial state
        //this.state = {greeting :
            // 'Click the button to receive greetings'}
            
        // Binding this keyword
        //this.updateState = this.updateState.bind(this)
    }
	
    // updateState(){
    //     // Changing state
    //     this.setState({greeting :
    //                 'GeeksForGeeks welcomes you !!'})
    // }
	
    render(){
        return (
            <>
            <div className="d-flex justify-content-between">
                <form className="form-inline " style={{ 'width': '95%' }}>
                    <div className="form-group ">
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password"></input>
                    </div>
                </form>
                <button type="submit" className="btn btn-primary">Go</button>
            </div>
            <div>

            </div>
        </>       
        )
    }
}
	
export default AlbumComponent;
