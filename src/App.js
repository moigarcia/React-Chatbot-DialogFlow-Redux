import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./chat";

class App extends Component {
  render() {
    const { feed, sendMessage } = this.props;
    
    return (
      <div className="container">
        <h1>Hello bot!!!</h1>
        <div>
          <ul>
            {feed.map((entry, index) => (
              <li key={index}><strong>{entry.sender.toUpperCase()}</strong> {entry.text}</li>
            ))}
          </ul>
          <input
            type="text"
            onKeyDown={e =>
              e.keyCode === 13 ? sendMessage(e.target.value) : null
            }
          />

        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  feed: state
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(App);
