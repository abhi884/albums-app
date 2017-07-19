
/**
 * 
 * index.js
 *
 * @description           entry file for albums app
 * @author                Abhinay
 * @date                  July 19 2017
 * 
 */

import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search-bar";
import AlbumList from "./components/album-list";
import axios from 'axios';

// Replace API key. It expires every one hour. 
// TODO: get access token from server
const API_KEY = "BQCn4UsS1wRG_7I0UTO8ZGMCRwR7jVrooU-2tgrf7T-3I7up-XnpFolJX3FaYNPZWytT4XwQsjiDr03ixN27Rg";

const ALBUMS_URL = "https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy/albums?limit=10";
const SEARCH_URL = "https://api.spotify.com/v1/search?type=artist&limit=10&q="

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      searchArtist: '',
      offset: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.albumQuery();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // calls spotify api to get data 
  // calls different api if user is searching 
  albumQuery() {
    let url;
    if (this.state.searchArtist === '') {
      url = ALBUMS_URL;
    } else {
      url = SEARCH_URL + this.state.searchArtist.split(' ').join('+');
    }

    axios({
      url: url + `&offset=${this.state.offset}`,
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + API_KEY
      }
    })
      .then(res => {
        let albumsData;

        if (this.state.searchArtist === '') {
          albumsData = res.data.items;
        } else {
          albumsData = res.data.artists.items;
        }

        this.setState((prevState, props) => {
        return {albums: prevState.albums.concat(albumsData)};
      });
    }, error => {
      console.log(error);
    });
  }

  // scroll handler for adding more labums on end of scroll
  // used for infinite scrolling. increases offset state and request for data
  handleScroll() {
    const windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState((prevState, props) => {
        return {offset: prevState.offset + 10};
      }, this.albumQuery);
    }
  }

  // render
  render() {
    const albumSearch = _.debounce(artist => {
      // reset albums and offset and set searchArtist 
      this.setState({ 
        albums: [], 
        searchArtist: artist, 
        offset: 0
      }, this.albumQuery );
    }, 700);

    return (
      <div>
        <div className="app-header">Album App</div>
        <SearchBar onSearchTermChange={albumSearch} />
        <AlbumList
          onAlbumSelect={selectedAlbum => this.setState({ selectedAlbum })}
          albums={this.state.albums}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
