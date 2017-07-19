/**
 * 
 * Album list
 *
 * @description           used for all albums list
 * @author                Abhinay
 * @date                  July 19 2017
 * 
 */

import React from "react";
import AlbumListItem from "./album-list-item";

const AlbumList = props => {
  const albumItems = props.albums.map(album => {
    return (
      <AlbumListItem
        key={album.id}
        album={album}
      />
    );
  });

  return (
    <ul className="album-group container-fluid container">
      {albumItems}
    </ul>
  );
};

export default AlbumList;
