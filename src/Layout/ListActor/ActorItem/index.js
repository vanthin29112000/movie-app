import React, { Component } from "react";
import imageAPI from "../../../Services/images";

class ActorItem extends Component {
   render() {
      const { profile_path, character, name } = this.props.actor;
      const img_file = imageAPI.fetchImageURL(profile_path);

      return (
         <div className="actor-item">
            {profile_path ? (
               <img src={img_file} alt="avatar.img"></img>
            ) : (
               <img
                  src="\images\istockphoto-1193057179-612x612.jpg"
                  alt="avatar.img"
               ></img>
            )}
            <div className="info-actor">
               <p className="info-actor__character">{name}</p>
               <p className="info-actor__name">{character}</p>
            </div>
         </div>
      );
   }
}
export default ActorItem;
