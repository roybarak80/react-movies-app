import React, { Component } from 'react';
import Header from './header';
import AlbumsList from './albumsList';
const REQ_URL = `http://localhost:3000/artist`;
// Production
//const REQ_URL = `/artist`; 

class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: ''
        }
    }

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=82e0e5a56b04994581c0700e5d61a2e5`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {

                this.setState({
                    artist: json
                })
            }
            )
    }
    render() {
       console.log(this.state.artist)
        return (
            <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                 
                        <span style={{ background: `url('https://image.tmdb.org/t/p/w500/${this.state.artist.poster_path}') no-repeat` }}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.title}</h3>
                        <div className="bio_text">
                            {this.state.artist.overview}
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Artist;