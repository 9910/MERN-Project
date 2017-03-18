import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Zones from './components/Zones'

class App extends Component {
   render() {
      return (
         <div>
            Hello React, something
            <Zones />
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
