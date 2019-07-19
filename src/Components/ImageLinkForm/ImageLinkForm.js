import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChnage, onSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This app with detect faces in your pics, Please enter an Image URL"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChnage}
          />
          <button
            onClick={onSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
