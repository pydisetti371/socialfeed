import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getFaceBook, getLinkedin, getTwitter } from "./redux/action";
class App extends React.Component {
  componentDidMount() {
    let facebook = [
      { post: "@JohnDoe", time: "03:01pm", name: "facebook" },
      { post: "@Chiranjeevi", time: "04:05pm", name: "facebook" },
      { post: "@Rajanikanth", time: "05:10pm", name: "facebook" },
      { post: "@Dhawan", time: "06:15pm", name: "facebook" },
      { post: "@Tamada media", time: "07:20pm", name: "facebook" },
    ];
    localStorage.setItem("faceBook", JSON.stringify(facebook));
    let localStorageData = JSON.parse(localStorage.getItem("faceBook") || "[]");
    this.props.dispatch(getFaceBook(localStorageData));

    let twitter = [
      { post: "@pm modi", time: "03:05pm", name: "twitter" },
      { post: "@rgv", time: "04:10pm", name: "twitter" },
      { post: "@vknaidu", time: "05:15pm", name: "twitter" },
      { post: "@Cbn", time: "06:20pm", name: "twitter" },
      { post: "@pk", time: "07:25pm", name: "twitter" },
    ];
    localStorage.setItem("twitter", JSON.stringify(twitter));
    let twitterData = JSON.parse(localStorage.getItem("twitter") || "[]");
    this.props.dispatch(getTwitter(twitterData));

    let linkedin = [
      { post: "@revanth-pydisetti", time: "03:10pm", name: "linkedin" },
      { post: "@billgates", time: "04:15pm", name: "linkedin" },
      { post: "@sundar-pichay", time: "05:20pm", name: "linkedin" },
      { post: "@mark", time: "06:25pm", name: "linkedin" },
      { post: "@Rahul", time: "07:30pm", name: "linkedin" },
    ];
    localStorage.setItem("linkedin", JSON.stringify(linkedin));
    let linkedinData = JSON.parse(localStorage.getItem("linkedin") || "[]");
    this.props.dispatch(getLinkedin(linkedinData));
  }

  // console.log(localStorageData);
  render() {
    const { twitterDetails, faceBookDetails, linkedinDetails } = this.props;
    // console.log(twitterDetails, faceBookDetails, linkedinDetails);
    return (
      <div>
        <ul>
          <li>
            {faceBookDetails && faceBookDetails[0] && faceBookDetails[0].post}{" "}
            "-"
            {faceBookDetails &&
              faceBookDetails[0] &&
              faceBookDetails[0].time}{" "}
            "-"
            {faceBookDetails && faceBookDetails[0] && faceBookDetails[0].name}
          </li>
          <li>
            {" "}
            {twitterDetails && twitterDetails[0] && twitterDetails[0].post} "-"
            {twitterDetails &&
              twitterDetails[0] &&
              twitterDetails[0].time} "-"{" "}
            {twitterDetails && twitterDetails[0] && twitterDetails[0].name}
          </li>
          <li>
            {" "}
            {faceBookDetails &&
              faceBookDetails[1] &&
              faceBookDetails[1].post}{" "}
            "-"
            {faceBookDetails && faceBookDetails[1] && faceBookDetails[1].time}{" "}
            "-"{" "}
            {faceBookDetails && faceBookDetails[1] && faceBookDetails[1].name}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    faceBookDetails: state.getFacebookDetails,
    twitterDetails: state.getTwitterDetails,
    linkedinDetails: state.getLinkedinDetails,
  };
};
// const mapActionToProps = {
//   getFaceBook,
// };

export default connect(mapStateToProps)(App);
