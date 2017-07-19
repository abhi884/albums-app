/**
 * 
 * Search Bar
 *
 * @description           used for artist search
 * @author                Abhinay
 * @date                  July 19 2017
 * 
 */

import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { artist: "" };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
              <div className="col-sm-12">
                  <div id="search_container"> 
                      <div className="input-group stylish-input-group">
                          <input type="text" className="form-control" placeholder="Search Artists"
                                 value={this.state.artist}
                                 onChange={event => this.onInputChange(event.target.value)} />
                          <span className="input-group-addon">
                              <button type="submit">
                                  <span className="glyphicon glyphicon-search"></span>
                              </button>  
                          </span>
                      </div>
                  </div>
              </div>
        </div>
      </div>

    );
  }

  onInputChange(artist) {
    this.setState({ artist: artist });
    this.props.onSearchTermChange(artist);
  }
}

export default SearchBar;
