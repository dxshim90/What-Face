import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "5024e64055f448a897f1f205314f8a5a"
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
};

class App extends React.Component {
  state = {
    input: "",
    imageURL: ""
  };

  onInputChnage = e => {
    this.setState({
      input: e.target.value
    });
  };

  onSubmit = () => {
    this.setState({
      imageURL: this.state.input
    });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function(err) {
        // there was an error
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChnage={this.onInputChnage}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
