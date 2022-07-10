import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
	
class TrackComponent extends Component {
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
            <><h1>Olá, {this.props.name}</h1><Card style={{ margin: '5px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body class="d-flex justify-content-between">
                    <div>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </div>

                    <div>
                        <Button variant="primary">Go somewhere</Button>
                    </div>
                </Card.Body>
            </Card></>       
        )
    }
}
	
export default TrackComponent;
