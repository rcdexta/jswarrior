import React, { Component } from 'react';
import {Loop, Stage, World, Body, Sprite} from 'react-game-kit'
import './App.css';
import sprite from './assets/character-sprite.png'

class App extends Component {
  render() {
    return (
      <div>
        <Loop>
          <Stage>
            <World>
              <Body
                args={[0, 384, 64, 64]}
                inertia={Infinity}
                >
              <Sprite
                repeat={false}
                src={sprite}
                state={0}
                scale={this.context.scale * 2}
                steps={[9, 9, 0, 4, 5]}
              />
              </Body>
            </World>
          </Stage>
        </Loop>
      </div>
    );
  }
}

export default App;
