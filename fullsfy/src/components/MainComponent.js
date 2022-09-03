import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import TracksComponent from '../components/tracksComponent'
import AlbumComponent from '../components/albumComponent'
import HomeComponent from '../components/homeComponent'

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {pagina: 'Home'};
    this.handleCLick = this.handleCLick.bind(this);
  }
  handleCLick(event) {
    this.setState({pagina: event.target.value})    
  }

    render() {
      return (
        <>
        <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="/">Fullsfy</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Button className="nav-link" variant="link" value="Home" onClick={this.handleCLick}>Home</Button>
                <Button className="nav-link" variant="link" value="Track" onClick={this.handleCLick}>Track</Button>
                <Button className="nav-link" variant="link" value="Album" onClick={this.handleCLick}>Album</Button>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        
        {this.state.pagina === 'Home' &&
          <div class="container border border-warning" style={{'margin-top': '10%'}}>
            <div class="text-center">
              <h1>{this.state.pagina}</h1>
              <p class="lead">blalblablalbal</p>
            </div>
            <HomeComponent name={this.state.pagina}></HomeComponent>
          </div>
        }

        {this.state.pagina === 'Track' &&
          <div class="container border border-warning" style={{'margin-top': '10%'}}>
            <div class="text-center">
              <h1>{this.state.pagina}</h1>
              <p class="lead">Copie o link da musica no campo</p>
            </div>
            <TracksComponent name={this.state.pagina}></TracksComponent>
          </div>
        }

        {this.state.pagina === 'Album' &&
          <div class="container border border-warning" style={{'margin-top': '10%'}}>
             <div class="text-center">
              <h1>{this.state.pagina}</h1>
              <p class="lead">Copie o link do album no campo</p>
            </div>
            <AlbumComponent name={this.state.pagina}></AlbumComponent>                   
          </div>
        }
        
        </>
      );
    }
  }

export default MainComponent;

