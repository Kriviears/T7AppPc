import React, { Component } from "react";
import "./MoveList.css";
import TekkenContext from "../TekkenContext";
import Move from "../Move/move";

export default class MoveList extends Component {
  static defaultProps = {
    match: {
      params: {}
    },
    columns: []
  };

  static contextType = TekkenContext;

  showColumn(target) {
    const result = this.props.columns.find(({ label }) => label === target);
    return result.value;
  }
  tableHeader(target) {
    return <th>{target}</th>;
  }

  render() {
    const { moves } = this.context;
    let filteredList = moves.map((move, index) => (
      <Move
        key={index}
        command={move.command}
        media={move.media}
        startup={move.startup}
        activeframes={move.activeframes}
        onblock={move.onblock}
        onhit={move.onhit}
        attribute={move.attribute}
        recovery={move.recovery}
        damage={move.damage}
        cancel={move.cancel ? "Yes" : ""}
        super_cancel={move.super_cancel ? "Yes" : ""}
        properties={move.properties}
        special={move.special ? "Yes" : ""}
        columns={this.props.columns}
      />
    ));

    return (
      <table className="movelist">
        <thead>
          <tr className="header">
            {/* <th><h1>{this.props.name}</h1></th> */}
            <th>
              <h1>Move List</h1>
            </th>
            {this.showColumn("startup") ? this.tableHeader("Start up") : <></>}
            {/* <th>
              <h1>activeframes</h1>
            </th> */}
            {this.showColumn("On block") ? this.tableHeader("On Block") : <></>}

            {this.showColumn("On hit") ? this.tableHeader("On Hit") : <></>}

            {this.showColumn("attribute") ? (
              this.tableHeader("Attribute")
            ) : (
              <></>
            )}

            {this.showColumn("recovery") ? this.tableHeader("Recovery") : <></>}

            {this.showColumn("damage") ? this.tableHeader("Damage") : <></>}

            {this.showColumn("Cancelable?") ? (
              this.tableHeader("Cancelable?")
            ) : (
              <></>
            )}

            {this.showColumn("Super Cancelable?") ? (
              this.tableHeader("Super Cancelable")
            ) : (
              <></>
            )}

            {this.showColumn("Properties") ? (
              this.tableHeader("Properties")
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody id="style-6">{filteredList}</tbody>
      </table>
    );
  }
}
