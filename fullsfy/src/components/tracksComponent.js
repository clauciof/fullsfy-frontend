import React, { Component } from 'react';
const axios = require('axios')
//import {Card, Button} from 'react-bootstrap';
	
class TrackComponent extends Component {
    constructor(props){
        super(props)

        // Set initial state
        this.state = {trackUrl : '', trackData: null}
            
        // Binding this keyword
        this.handleChange = this.handleChange.bind(this)
        this.handleTrackSubmit = this.handleTrackSubmit.bind(this)
        this.handleTrackDataChange = this.handleTrackDataChange.bind(this);
    }
	
    //Update State
    handleChange(event){
        this.setState({trackUrl: event.target.value})
    }

    handleTrackDataChange(trackData){
        this.setState({trackData: trackData})
    }

    async handleTrackSubmit(){
        console.log("trackURL: ", this.state.trackUrl)
        //alert('Um nome foi enviado: ' + this.state.trackUrl)
        //event.preventDefault()

        //call axios
        try {
            const trackId =  this.state.trackUrl.replace('https://open.spotify.com/track/', '')
            const response = await axios.get('http://localhost:3008/tracks/getTrack', {
                headers:{
                    'Content-Type': 'application/json',
                },
                params: {
                    id: trackId,
                },
            })
            console.log(response.data);
            if(response.data){
                this.handleTrackDataChange(response.data)
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
	
    render(){
        const trackData = this.state.trackData
        return (
            <>
                <div className="d-flex justify-content-between">
                    <form className="form-inline " style={{'width': '95%'}}>
                        <div className="form-group " >
                            <input type="url" className="form-control" id="trackInput" placeholder="https://open.spotify.com/track/2v4Z7AVzoobxnsp9s1NHdm?si=4e9199c58aee4972" value={this.state.trackUrl} onChange={this.handleChange}></input>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTrackSubmit}>Go</button>
                </div>
                <div className="container d-flex  justify-content-between" style={{'marginTop': '1%'}} >
                    {trackData &&
                        <>
                        <div className="p-2 ">
                            <img src={trackData.trackResponse.album.images[1].url} alt='' style={{ 'marginRight': '5%' }}></img>

                            <p className="font-weight-bold">{trackData.trackResponse.name}</p>
                            <p className="font-weight-light">{trackData.trackResponse.artists[0].name}</p>
                            <p className="font-weight-light">{trackData.trackResponse.album.name}</p>
                        </div>
                        <>

                        <div className="p-2 d-flex flex-row">
                            <p className="font-weight-light">Acousticness: {trackData.audioFeature.acousticness}</p>
                            <p className="font-weight-light">Danceability: {trackData.audioFeature.danceability}</p>
                            <p className="font-weight-light">Duration: {trackData.audioFeature.duration_ms}</p>
                            <p>Energy: {trackData.audioFeature.energy}</p>
                            <p>Key: {trackData.audioFeature.key}</p>
                            <p>Liveness: {trackData.audioFeature.liveness}</p>
                            <p>Loudness: {trackData.audioFeature.loudness}</p>
                            <p>Speechiness: {trackData.audioFeature.speechiness}</p>
                            <p>Tempo: {trackData.audioFeature.tempo}</p>
                        </div>

                        </></>
                    }
                </div>
            </>         
        )
    }
}
	
export default TrackComponent;
