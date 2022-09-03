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
            <div class="d-flex justify-content-between">
                <form class="form-inline " style={{ 'width': '95%' }}>
                    <div class="form-group ">
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>
                    </div>
                </form>
                <button type="submit" class="btn btn-primary">Go</button>
            </div>
            <div>

            </div>
        </>       
        )
    }
}
	
export default AlbumComponent;
