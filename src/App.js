import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getFaceBook, getLinkedin, getTwitter } from "./redux/action";
class App extends React.Component {
  componentDidMount() {
    let facebook = [
      { post: "@JohnDoe", time: "03:01pm" },
      { post: "@Chiranjeevi", time: "04:05pm" },
      { post: "@Rajanikanth", time: "05:10pm" },
      { post: "@Dhawan", time: "06:15pm" },
      { post: "@Tamada media", time: "07:20pm" },
    ];
    localStorage.setItem("faceBook", JSON.stringify(facebook));
    let localStorageData = JSON.parse(localStorage.getItem("faceBook") || "[]");
    this.props.dispatch(getFaceBook(localStorageData));

    let twitter = [
      { post: "@pm modi", time: "03:05pm" },
      { post: "@rgv", time: "04:10pm" },
      { post: "@vknaidu", time: "05:15pm" },
      { post: "@Cbn", time: "06:20pm" },
      { post: "@pk", time: "07:25pm" },
    ];
    localStorage.setItem("twitter", JSON.stringify(twitter));
    let twitterData = JSON.parse(localStorage.getItem("twitter") || "[]");
    this.props.dispatch(getTwitter(twitterData));

    let linkedin = [
      { post: "@revanth-pydisetti", time: "03:10pm" },
      { post: "@billgates", time: "04:15pm" },
      { post: "@sundar-pichay", time: "05:20pm" },
      { post: "@mark", time: "06:25pm" },
      { post: "@Rahul", time: "07:30pm" },
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
            {faceBookDetails[0].post} "-"
            {faceBookDetails[0].time}
          </li>
          <li>
            {" "}
            {twitterDetails[0].post} "-"{twitterDetails[0].time}
          </li>
          <li>
            {" "}
            {faceBookDetails[1].post} "-"{faceBookDetails[1].time}
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
