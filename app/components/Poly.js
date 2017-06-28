import React, {Component} from "react";

import Output from "./children/Output";
// import Clear from "./children/Clear";
import D20 from "./children/d20";
import D12 from "./children/d12";
import D10 from "./children/d10";
import D00 from "./children/d100";
import D8 from "./children/d8";
import D6 from "./children/d6";
import D4 from "./children/d4";

const data = [
    {
        id: 0,
        name: "Output",
        role: "textbox",
        sides: undefined,
        img: ""
    },
    // {
    //     id: 1,
    //     name: "Clear",
    //     role: "button",
    //     sides: undefined,
    //     img: ""
    // },
    {
        id: 2,
        name: "d20",
        role: "die",
        sides: 20,
        img: ""
    },
    {   id: 3,
        name: "d10",
        role: "die",
        sides: 10,
        img: ""
    },
    {   id: 4,
        name: "d10",
        role: "die",
        sides: 10,
        img: ""
    },
    {
        id: 5,
        name:"d8",
        role: "die",
        sides: 8,
        img: ""
    },
    {
        id: 6,
        name:"d6",
        role: "die",
        sides: 6,
        img:""
    },
    {
        id: 7,
        name:"d4",
        role: "die",
        sides: 4,
        img:""
    },
    {
        id: 8,
        name:"d00",
        role: "die",
        sides: 100,
        img:""
    }
];

export default class Poly extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
            number: 0,
            modifier: 0,
            results:[],
            total: 0,
            advantage: false,
            disadvantage: false,
            lucky: false,
            data
        };
        this.renderOutput = this.renderOutput.bind(this);
        this.renderDice = this.renderDice.bind(this);
    }
    // componentDidUpdate(results, before) {
    //     if (this.state.rolls) {
    //         results = this.state.results;
    //         console.log(
    //             `${this.state.name} rolled ${this.state.number} time(s)`
    //             `with a modifier of ${this.modifier}. Here are the results:\n`
    //             `${results}, total: ${total}`
    //         );
    //     } else {
    //         return before;
    //     }
    // }

    renderOutput() {
        return this.state.data.map(
        <div key={data.id} className="output-box textbox">
          <Output data={data} handleClick={this.renderOutput} />
        </div>
        )
    }

    renderDice() {
        return this.state.data.map(
      data => // We use each data object's id as a unique key
        <div key={data.id} className="die-box" id={data.name}>
          <D20 data={data} handleClick={this.rollDie} />
          <D12 data={data} handleClick={this.rollDie} />
          <D10 data={data} handleClick={this.rollDie} />
          <D8 data={data} handleClick={this.rollDie} />
          <D6 data={data} handleClick={this.rollDie} />
          <D4 data={data} handleClick={this.rollDie} />
          <D00 data={data} handleClick={this.rollDie} />
        </div>
      );
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                <Output />
                </div>
                <div className="col s12">
                <D20 />
                </div>
                <div className="col s12">
                <D12 />
                </div>
                <div className="col s12">
                <D10 />
                </div>
                <div className="col s12">
                <D8 />
                </div>
                <div className="col s12">
                <D6 />
                </div>
                <div className="col s12">
                <D4 />
                </div>
                <div className="col s12">
                <D00 />
                </div>
            </div>
        )
    }
}
    // rollDie(input) {
    //    setState({
    //        number: this.state.number += input
    //    }) 
        

    // }

  function rollDie(die)
  {
    die = props.data.sides;
    let rolled = Math.floor(Math.random() * die + 1);
    return rolled;
  }

function roll(number, sides) {
    let total = 0;
    let modifier = 0;
    while(number-- > 0) total += rollDie(sides);
    return total;


}
