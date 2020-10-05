import React, { Component } from "react";
import Recommendations from "../components/recommendations/recommendations";
import AudioPlayer from "../components/audioplayer/audioplayer";
import "../index.css";

const BASE_URL = "http://3.84.92.89:5001/";

class MusicPlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props, URLLink: "" };
    this.audio = NaN;
    console.log(this.props.song);
    console.log(window.location.pathname.split("/"));
  }

  componentWillReceiveProps(nextProps) {
    if ({ ...nextProps, URLLink: "" } !== this.state) {
      this.getRecs();
    }

    this.setState({ ...nextProps, URLLink: "" });
  }

  componentDidMount() {
    console.log(window.location.pathname.split("/"));
    if (window.location.pathname.split("/")[1] === "recent") {
      let state = { ...this.state };
      state.song.id = window.sessionStorage.getItem("songCache")
        ? JSON.parse(window.sessionStorage.getItem("songCache").split("*")[0])[
            "id"
          ]
        : "";
      this.setState({ state });
      this.getRecs();
    } else {
      this.getRecs();
    }
  }

  getRecs = async () => {
    if (window.location.pathname.split("/")[1] === "recent") {
      // this.setState({recommendations:JSON.parse(window.sessionStorage.getItem("songCache").split("*").slice(1,))})
      if (window.sessionStorage.getItem("songCache")) {
        let rec = window.sessionStorage
          .getItem("songCache")
          .split("*")
          .slice(1);
        rec.forEach((item, idx) => {
          rec[idx] = JSON.parse(item);
          rec[idx]["img_url"] = rec[idx]["img_url"].slice(
            1,
            rec[idx]["img_url"].length - 1
          );
        });
        console.log(rec);
        this.setState({ recommendations: rec });
      }
    } else {
      const req2 = await fetch(
        `${BASE_URL}/recommend?vid=${this.state.song.id}`
      );
      const res2 = await req2.json();
      console.log(res2, this.state.song.id);
      this.setState({ recommendations: res2.items });
    }
  };

  onPlayClick = () => {
    fetch(`${BASE_URL}/play?vid=${this.state.song.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ play: false });
        this.setState({ URLLink: res.url });
        this.audio = new Audio(res.url);
        this.audio.play();
        console.log(this.state.song);
        let curr_cache = window.sessionStorage.getItem("songCache");
        let setting_dict = {
          id: this.state.song.id,
          img_url: `"https://img.youtube.com/vi/${this.state.song.id}/0.jpg"`,
          title: this.state.song.title,
        };
        if (
          curr_cache === undefined ||
          curr_cache === null ||
          curr_cache === ""
        ) {
          window.sessionStorage.setItem(
            "songCache",
            JSON.stringify(setting_dict)
          );
        } else {
          // console.log(typeof(curr_cache))
          curr_cache = curr_cache + "*" + JSON.stringify(setting_dict);
          curr_cache = curr_cache.split("*");
          curr_cache = [...new Set(curr_cache)];
          curr_cache = curr_cache.reverse().slice(0, 5);
          curr_cache = curr_cache.join("*");
          window.sessionStorage.setItem("songCache", curr_cache);
        }
      });
  };

  onPauseClick = () => {
    fetch(`${BASE_URL}/pause`);
    this.setState({ play: !this.state.play });
    this.audio.pause();
  };

  updateMusicComponent = (song_id, title) => {
    let state = { ...this.state };
    state["song"]["id"] = song_id;
    state["song"]["title"] = title;
    this.setState({ state });
    this.getRecs();
  };

  componentWillUnmount() {
    if (!isNaN(this.audio)) {
      this.audio.remove();
    }
  }

  render() {
    // console.log(this.props.recommendations)
    return (
      <div>
        <section className="tc pa3">
          <p className="f3 bb b--blue red-heading-color w-25 pa1 mt2">
            Top Result
          </p>
          <article className="hide-child relative ba b--black-20 mw5 ml3">
            <img
              src={`https://img.youtube.com/vi/${this.state.song.id}/0.jpg`}
              className="db w-75 center"
              alt="Top Result"
            />
            <div className="pa2 bt b--black-20">
              <p className="f5 white mv1">{this.state.song.title}</p>
              {this.state.play !== false ? (
                <p
                  className="link pointer tc ph3 ma2 pa1 db bg-animate buttonColor f6 br2"
                  onClick={this.onPlayClick}
                >
                  > PLAY
                </p>
              ) : (
                <p
                  className="link pointer tc ph3 ma2 pa1 db bg-animate buttonColor f6 br2"
                  onClick={this.onPauseClick}
                >
                  || PAUSE
                </p>
              )}
              {/* <p className="link tc ph3 ma2 pa1 db bg-animate buttonColor f6 br2" href="#">+ Add to playlist</p> */}
            </div>
            <p
              className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b"
              href="#"
            >
              ×
            </p>
          </article>
          <div>
            <p className="f3 bb b--blue red-heading-color w-25 pa1 mt4 ">
              Recommendations
            </p>
            <Recommendations
              recommendations={this.state.recommendations}
              updateMusicComponent={this.updateMusicComponent}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default MusicPlayerPage;
