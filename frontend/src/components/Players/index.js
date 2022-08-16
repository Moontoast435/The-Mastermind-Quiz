import React from "react";

 const Players = (props) => {
  return (
    <p role="players" className="players">
      {props.player}
    </p>
  );
};

export default Players;