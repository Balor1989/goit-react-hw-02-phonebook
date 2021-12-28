import { Component } from "react/cjs/react.production.min";
import Contacts from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";
import shortid from "shortid";


class App extends Component {

  state = {
    contacts: [],
    name: '',
    number:''
  }

  formSubmit = (e) => {
     e.preventDefault()
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number
     }
   
    this.setState(prevState => (
      {
        contacts: [contact, ...prevState.contacts]
      }
    ))
    
    console.log('Submit')
  }
  inputName = e => {
    this.setState({name: e.target.value})
  }

  inputNumber = e => {
    this.setState({number: e.target.value})
  }


  render() {
    return (
      <>
        <Phonebook
          onFormSubmit={this.formSubmit}
          onInputName={this.inputName}
          onInputNumber={this.inputNumber}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    )
  }

}

export default App;
