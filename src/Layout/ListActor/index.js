import React, { Component } from "react";
import ActorItem from "./ActorItem";
import "./ListActor.css";
class ListActor extends Component {
   render() {
      return (
         <div className="list-actor">
            <div className="list-actor__content">
               <p className="list-actor__title">Actor</p>
               <div className="list-actor__item">
                  {this.props.actors.map((ele, index) => (
                     <ActorItem actor={ele} key={index}></ActorItem>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}
export default ListActor;
