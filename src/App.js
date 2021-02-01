import React, { useState } from "react";
import Buttons from "./Buttons/counterButton";
import MyComponent from "./MyComponent";
import RandomJoke from "./RandomJoke";
import BreakingBad from "./BreakingBad.js";
import "./App.css";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="all_star.mp4" />
          <File name="express_file.mp4" />
        </Folder>
        <File name="Dogs.jpeg" />
        <File name="Cats.png" />
      </Folder>

      <Folder name="Applications">
        <Folder name="Counter">
          <Buttons />
        </Folder>
        <Folder name="RandomUser">
          <MyComponent />
        </Folder>
        <Folder name="Random Joke Generator">
          <RandomJoke></RandomJoke>
        </Folder>
      </Folder>
      <Folder name="Breaking Bad Cast">
        <BreakingBad />
      </Folder>
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const direction = isOpen ? "down" : "right";

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={handleClick}>
        <i className="folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcon = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
  };
  return (
    <div>
      <span>
        <i className={`${fileIcon[fileExtension]} icon`}></i>
      </span>
      {name}
    </div>
  );
};
export default App;
