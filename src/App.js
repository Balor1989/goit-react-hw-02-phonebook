import { Component } from "react/cjs/react.production.min";
import Phonebook from "./Phonebook/Phonebook";

class App extends Component {

  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (
      <>
        <Phonebook />
      </>
    )
  }

}

export default App;
