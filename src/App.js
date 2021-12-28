import { Component } from "react/cjs/react.production.min";
import Contacts from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";
import shortid from "shortid";
import file from './Contacts/file.json'

class App extends Component {

  state = {
    contacts: file,
    name: ''
  }

  formSubmit = (e) => {
     e.preventDefault()
    const contact = {
      id: shortid.generate(),
      name:this.inputChange()
     }
   
    this.setState(prevState => (
      {
        contacts: [contact, ...prevState.contacts]
      }
    ))
    console.log(this.state.contacts)
    this.setState({name:''})
    console.log('Submit')
  }
  inputChange = (e) => {
    // console.log(e.target.value)
    this.setState({name: e.target.value})
  }


  render() {
    return (
      <>
        <Phonebook
          onFormSubmit={this.formSubmit}
          onInputChange={this.inputChange}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    )
  }

}

export default App;
