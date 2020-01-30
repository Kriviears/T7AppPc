import React, { Component } from "react";
import "./CharacterPageMain.css";
import TekkenContext from "../TekkenContext";
import CharacterApiService from "../services/char-api-service";
import MoveList from "../MoveList/MoveList";
import MultiSelectReact from "multi-select-react";

export default class CharacterPageMain extends Component {
  constructor() {
    super();
    this.state = {
      multiSelect: [
        { id: 1, label: "startup", value: true },
        { id: 2, label: "On block", value: true },
        { id: 3, label: "On hit", value: true },
        { id: 4, label: "attribute", value: false },
        { id: 5, label: "recovery", value: false },
        { id: 6, label: "damage", value: true },
        { id: 7, label: "Cancelable?", value: false },
        { id: 8, label: "Super Cancelable?", value: false },
        { id: 9, label: "Properties", value: true }
      ]
    };
  }

  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = TekkenContext;

  componentDidMount() {
    CharacterApiService.getMoves(this.props.match.params.name).then(data => {
      this.context.getMoves(data);
    });
  }

  render() {
    const selectedOptionsStyles = {
      color: "#3c763d",
      backgroundColor: "#dff0d8"
    };
    const optionsListStyles = {
      backgroundColor: "#fcf8e3",
      color: "#8a6d3b"
    };
    return (
      <div className="CharPageMain">
        <MultiSelectReact
          options={this.state.multiSelect}
          optionClicked={this.optionClicked.bind(this)}
          selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
          selectedOptionsStyles={selectedOptionsStyles}
          optionsListStyles={optionsListStyles}
          isTextWrap={true}
        />

        <MoveList
          name={this.props.match.params.name}
          columns={this.state.multiSelect}
        />
      </div>
    );
  }

  optionClicked(optionsList) {
    console.log("badge clicked");
    this.setState({ multiSelect: optionsList });
  }
  selectedBadgeClicked(optionsList) {
    console.log("option clicked");
    this.setState({ multiSelect: optionsList });
  }
}
