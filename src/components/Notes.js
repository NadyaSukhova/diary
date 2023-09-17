import React from "react";
import spot1 from "../img/Spot1.png";

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div id="notes">
           {this.props.users.notes}
        </div>
    )
  }
}

export default Notes;
