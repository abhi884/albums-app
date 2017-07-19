/**
 * 
 * Album list item
 *
 * @description           used for list item
 * @author                Abhinay
 * @date                  July 19 2017
 * 
 */

import React from "react";

const AlbumListItem = ({ album }) => {
  const imageUrl = album.images[1]?album.images[1].url:null;

  return (
    <li className="col-sm-12 col-md-6 col-lg-4 album-group-item">
      <div className="album-group-panel">
        <img className="album-img img-rounded" alt="No Photo" src={imageUrl} />
        <div className="album-name" title={album.name}>{album.name}</div>
        <a className="btn btn-primary album-btn" 
           href={album.external_urls.spotify} 
           target="_blank">Open</a>
      </div>
    </li>
  );
};

export default AlbumListItem;
