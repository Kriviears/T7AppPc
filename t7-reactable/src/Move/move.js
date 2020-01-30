import React, { Component } from "react";
import "./move.css";
import TekkenContext from "../TekkenContext";

export default class Move extends Component {
  fixProps = data => {
    if (data.media === null) {
      this.setState({
        media: "image coming soon"
      });
    }
    if (data.attribute === "") {
      this.setState({
        attribute: "mid"
      });
    }
  };

  showColumn(target) {
    const result = this.props.columns.find(({ label }) => label === target);
    return result.value;
  }
  tableRow(target) {
    return <td style={this.calcWidth}>{target}</td>;
  }
  numberColumns() {
    var numberTrue = 0;
    this.props.columns.forEach(column => {
      if (column.value === true) numberTrue++;
    });
    if (numberTrue !== 0) return numberTrue;
    else return 1;
  }

  calcWidth = {
    width: `${100 / this.numberColumns()}%`
  };

  static contextType = TekkenContext;

  render() {
    // this.fixProps(this.state);
    return (
      <tr>
        {/* <td>{this.props.media}</td> */}
        {this.tableRow(this.props.command)}

        {this.showColumn("startup") ? this.tableRow(this.props.startup) : <></>}

        {this.showColumn("On block") ? (
          this.tableRow(this.props.onblock)
        ) : (
          <></>
        )}
        {this.showColumn("On hit") ? this.tableRow(this.props.startup) : <></>}
        {this.showColumn("attribute") ? (
          this.tableRow(this.props.attribute)
        ) : (
          <></>
        )}
        {this.showColumn("recovery") ? (
          this.tableRow(this.props.recovery)
        ) : (
          <></>
        )}
        {this.showColumn("damage") ? this.tableRow(this.props.damage) : <></>}
        {this.showColumn("Cancelable?") ? (
          this.tableRow(this.props.cancel)
        ) : (
          <></>
        )}
        {this.showColumn("Super Cancelable?") ? (
          this.tableRow(this.props.super_cancel)
        ) : (
          <></>
        )}
        {this.showColumn("Properties") ? (
          this.tableRow(this.props.properties)
        ) : (
          <></>
        )}
      </tr>
    );
  }
}
