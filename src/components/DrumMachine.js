
import React from 'react';
import './DrumMachine.css';
import useKeyPress from 'react-use-keypress'

class DrumMachine extends React.Component {

      constructor(props){
            super(props);
            this.state = {
                  currentString: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleKeyPress = this.handleKeyPress.bind(this);
      }

      handleKeyPress = (event) => {
          
            switch(event.key.toLowerCase()) {
                  case 'q':
                        this.setState({
                              currentString: 'Heater 1'
                        })
                        document.getElementById('Q').play();
                        break;
                  case 'w':
                        this.setState({
                              currentString: 'Heater 2'
                        })
                        document.getElementById('W').play();
                        break;
                  case 'e':
                        this.setState({
                              currentString: 'Heater 3'
                        })
                        document.getElementById('E').play();
                        break;
                  case 'a':
                        this.setState({
                              currentString: 'Clap'
                        })
                        document.getElementById('A').play();
                        break;
                  case 's':
                        this.setState({
                              currentString: 'Heater 4'
                        })
                        document.getElementById('S').play();
                        break;
                  case 'd':
                        this.setState({
                              currentString: 'Open HH'
                        })
                        document.getElementById('D').play();
                        break;
                  case 'z':
                        this.setState({
                              currentString: 'Kick n’ Hat'
                        })
                        document.getElementById('Z').play();
                        break;
                  case 'x':
                        this.setState({
                              currentString: 'Kick'
                        })
                        document.getElementById('X').play();
                        break;
                  case 'c':
                        this.setState({
                              currentString: 'Closed HH'
                        })
                        document.getElementById('C').play();
                        break;  
            }
      }

      componentDidMount() {
            document.addEventListener("keydown", this.handleKeyPress)
      }

      componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyPress);
      }

      handleChange (event) {

            let para = event.target.innerText;
            
            switch(para) {
                  case 'Q':
                        this.setState({
                              currentString: 'Heater 1'
                        })
                        document.getElementById('Q').play();
                        break;
                  case 'W':
                        this.setState({
                              currentString: 'Heater 2'
                        })
                        document.getElementById('W').play();
                        break;
                  case 'E':
                        this.setState({
                              currentString: 'Heater 3'
                        })
                        document.getElementById('E').play();
                        break;
                  case 'A':
                        this.setState({
                              currentString: 'Clap'
                        })
                        document.getElementById('A').play();
                        break;
                  case 'S':
                        this.setState({
                              currentString: 'Heater 4'
                        })
                        document.getElementById('S').play();
                        break;
                  case 'D':
                        this.setState({
                              currentString: 'Open HH'
                        })
                        document.getElementById('D').play();
                        break;
                  case 'Z':
                        this.setState({
                              currentString: 'Kick n’ Hat'
                        })
                        document.getElementById('Z').play();
                        break;
                  case 'X':
                        this.setState({
                              currentString: 'Kick'
                        })
                        document.getElementById('X').play();
                        break;
                  case 'C':
                        this.setState({
                              currentString: 'Closed HH'
                        })
                        document.getElementById('C').play();
                        break;  
            }
      }
      
      render() {  

            return (
                  
                  <div className="whole-container">

                        <div id="drum-machine">
                        
                              <div className="digits">
                      
                                    <div className="drum-pad" id="Heater-1" onClick={this.handleChange}>
                                          <audio className="clip" id="Q" src='./Q.wav' ></audio>
                                          Q
                                    </div>      
                                    <div className="drum-pad" id="Heater-2" onClick={this.handleChange}>
                                          <audio className="clip" id="W" src='./W.wav' ></audio>
                                          W
                                    </div>      
                                    <div className="drum-pad" id="Heater-3" onClick={this.handleChange}>
                                          <audio className="clip" id="E" src='./E.wav' ></audio>
                                          E
                                    </div>  
                                    <br />

                                    <div className="drum-pad" id="Heater-4" onClick={this.handleChange}>
                                          <audio className="clip" id="A" src='./A.wav' ></audio>
                                          A
                                    </div>      
                                    <div className="drum-pad" id="Heater-5" onClick={this.handleChange}>
                                          <audio className="clip" id="S" src='./S.wav' ></audio>
                                          S
                                    </div>      
                                    <div className="drum-pad" id="Heater-6" onClick={this.handleChange}>
                                          <audio className="clip" id="D" src='./D.wav' ></audio>
                                          D
                                    </div>    
                                    <br />

                                    <div className="drum-pad" id="Heater-7" onClick={this.handleChange}>
                                          <audio className="clip" id="Z" src='./Z.wav' ></audio>
                                          Z
                                    </div>      
                                    <div className="drum-pad" id="Heater-8" onClick={this.handleChange}>
                                          <audio className="clip" id="X" src='./X.wav' ></audio>
                                          X
                                    </div>      
                                    <div className="drum-pad" id="Heater-9" onClick={this.handleChange}>
                                          <audio className="clip" id="C" src='./C.wav' ></audio>
                                          C
                                    </div>      

                              </div>

                              <div className="other">

                                    <div className="power-text">
                                          <p>
                                          <strong>Power</strong>
                                          </p>
                                          <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                          </label>
                                    </div>
                                   
                                    <br />
                                    <div id="display">
                                          <div className="well-parent">
                                                <div className="well">
                                                      {this.state.currentString}
                                                </div>
                                          </div>
                                    </div>
                                 
                                    <div className="my-1">
                                          <input type="range" className="custom-range" min={0} max={100} />
                                    </div>

                                    <div className="power-text">
                                          <p>
                                          <strong>Bank</strong>
                                          </p>
                                          <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                          </label>
                                    </div>
                              </div>
                              
                        </div>
                  </div>
            )
      }
}

export default DrumMachine;