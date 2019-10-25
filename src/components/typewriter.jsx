import React from "react";

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ render: true }), this.props.delay);
  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        {!this.state.render
          ? null
          : React.createElement(
              this.props.tag,
              {
                className: `typewriter-${this.props.lineLength}${
                  this.props.infinite ? "-infinite" : ""
                }`
              },
              this.props.text
            )}
      </div>
    );
  }
}

export default Typewriter;
