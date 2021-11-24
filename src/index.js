import React, { useState } from "react";
import ReactDOM from "react-dom";

class MovieItem extends React.Component {
  render() {
    return <li>{`This is ${this.props.item}`}</li>;
  }
}

class MovieList extends React.Component {
  render() {
    const movieNameList = ["movie 1", "movie 2", "movie 3"];

    //Example of having components in an array, uncomment the array beolow and movieItemList in the return()
    /*const movieItemList = [
      <MovieItem item={"movie 4"} />,
      <MovieItem item={"movie 5"} />,
      <MovieItem item={"movie 6"} />,
    ];*/
    return (
      <div>
        <h2>Movie List</h2>
        <ol>
          <MovieItem item={movieNameList[0]} />
          <MovieItem item={movieNameList[1]} />
          <MovieItem item={movieNameList[2]} />
          {/*movieItemList*/}
        </ol>
      </div>
    );
  }
}

class ReusableParagraphBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello this is state text",
    };
  }
  render() {
    return <p>{this.state.text}</p>;
  }
}

class ParentClass extends React.Component {
  render() {
    const contentText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown";

    const moreText = "hello how are you?";
    return (
      <div>
        <h1>Welcome to my Website</h1>
        <div classNAme="siteDescription">
          <ReusableParagraphBox text={contentText} />
        </div>

        <div className="content">
          <MovieList />
        </div>

        <ReusableParagraphBox text={moreText} />
      </div>
    );
  }
}

//======================================================================//

ReactDOM.render(
  <ParentClass />,
  document.getElementById("root") // found as the tag on the index.html main <div>
);
