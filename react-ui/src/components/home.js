import React, { Component } from 'react';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArtists } from '../actions'
import Reveal from 'react-reveal'; // REACT REVEAL
import 'animate.css/animate.css'; //  REACT REVEAL


import { bindActionCreators } from 'redux';

class Home extends Component {

    componentDidMount() {

        this.props.getArtists()
    }


    
    renderArtists = ({ ...movies_list }) => {
     
        var tifOptions = [];

        Object.values(movies_list).forEach(function(key) {
            tifOptions.push(key.results);
        });

        return tifOptions.map((items) => {
            return items.map((item) => {
                const style = {
                    background: `url('https://image.tmdb.org/t/p/w500/${item.poster_path}') no-repeat`
                }
                const movie_url = (original_title)=>{

                    return original_title.replace(/[,+:+;\-]/g,'').replace(/\s/g,'-').toLowerCase();
                }
                return <Reveal key={item.id} effect="animated fadeInUp">
                <Link key={item.id} to={`/artist/${item.id}`}
                    className="artist_item"
                    style={style}
                >
                    <div>{item.original_title}</div>
                </Link>
                </Reveal>
             })
        })
    }

    render() {
        
        return (
            <div>
                <Banner />
                <div className="artists_list">
                    <h4>Browse the Artists</h4>
                    {this.renderArtists(this.props.artists)}


                </div>

            </div>
        )
    }
}


function mapStateToProps(state) {
   
   
    return {
        artists: state.artists,

    }
   
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getArtists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


