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
    return <td>{target}</td>;
  }

  static contextType = TekkenContext;

  render() {
    // this.fixProps(this.state);
    return (
      <tr>
        {/* <td>{this.props.media}</td> */}
        <td>{this.props.command}</td>
        {/* <td>{this.props.startup}</td> */}
        {this.showColumn("startup") ? this.tableRow(this.props.startup) : <></>}
        {/* <td>{this.props.activeframes}</td> */}
        <td>{this.props.onblock}</td>
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
        {/* <td>{this.props.onhit}</td>
        <td>{this.props.attribute}</td>
        <td>{this.props.recovery}</td>
        <td>{this.props.damage}</td>
        <td>{this.props.cancel}</td>
        <td>{this.props.super_cancel}</td>
        <td>{this.props.properties}</td> */}
      </tr>
    );
  }
}
