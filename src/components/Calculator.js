import { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbols: [
        [
          'AC',
          String.fromCharCode(0x207A) + String.fromCharCode(0x2215)
      + String.fromCharCode(0x208B),
          '%',
          String.fromCharCode(0x00F7),
        ],

        [7, 8, 9, String.fromCharCode(0x00D7)],

        [4, 5, 6, String.fromCharCode(0x002D)],

        [1, 2, 3, String.fromCharCode(0x002B)],

        [0, String.fromCharCode(0x065C), String.fromCharCode(0x003D)],

      ],
      result: 0,
    };
  }

  render() {
    const { result, symbols } = this.state;
    return (
      <div id="calculator">
        <section id="result-section">
          <span id="result">{result}</span>
        </section>
        <ul id="opertations-section">
          {
           symbols.map((row) => (
             <li className="row" key={row[0]}>
               <span className="cell">{row[0]}</span>
               <span className="cell">{row[1]}</span>
               <span className="cell">{row[2]}</span>
               { row[3] ? <span className="cell">{row[3]}</span>
                 : ''}
             </li>
           ))
           }
        </ul>
      </div>
    );
  }
}
export default Calculator;
