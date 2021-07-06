import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import Item from './component/Item';
 import Market from './component/Market';
 import React, { Component } from 'react';


 class App extends Component {
  constructor() {
    super()

  }
  render(){
    return (
          <div className="App">
            <Market store={this.props.store}></Market>
          </div>
        );

  } 

}

export default observer(App);

// const App = observer((props) => {

//   return (
//     <div className="App">
//       <Market store={props.store}></Market>
//     </div>
//   );
// })

// export default App;
