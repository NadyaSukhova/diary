import React from "react";

class Image extends React.Component {
    render () {
        return (
            <div id="timePicture">
            <img src={this.props.path} alt='time icon'/>
            </div>
        )
    }
}

export default Image