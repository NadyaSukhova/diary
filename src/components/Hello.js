import React from "react";
import Moment from "react-moment";
import Image from "./Image";
import brush from "../img/brush.png";
import userBrush from "../img/userBrush.png";
import morning from "../img/morning.png";
import afternoon from "../img/afternoon.png";
import evening from "../img/evening.png";
import night from "../img/night.png";

class Hello extends React.Component {
  nowHours = new Date().getHours();
  greetings = ["Доброе утро!", "Добрый день!", "Добрый вечер!", "Доброй ночи!"];
  pictures = [morning, afternoon, evening, night];
  
  render() {
    var url = brush;
    if (this.props.name) {
      url = userBrush;
      for (var index in this.greetings) {
        this.greetings[index] = this.greetings[index].replace("!", ", " + this.props.name + "!")
    }
    }
    var time =
      this.nowHours < 10
        ? 0
        : this.nowHours < 16
        ? 1
        : this.nowHours < 20
        ? 2
        : 3;
    return (
      <div id="hat">
        <center>
          <h1
            style={{
              backgroundImage: `url(${url})`,
            }}
          >
            {this.greetings[time]}
          </h1>
        </center>
        <div id="pics">
          <Moment format="HH:mm:ss" interval={1000} />
          <Image path={this.pictures[time]} />
        </div>
      </div>
    );
  }
}

export default Hello;
