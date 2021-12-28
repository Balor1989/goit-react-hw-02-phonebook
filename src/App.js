import { Component } from "react/cjs/react.production.min";
import Contacts from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";
import shortid from "shortid";


class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
  }

  addContactCard = (values) => {
          const {name, number} = values
            const contact = {
            id: shortid.generate(),
            name: name,
            number: number
        }

        this.setState(prevState => (
            {
                contacts: [contact, ...prevState.contacts]
            }
        ))
          }

  render() {
    return (
      <>
        <Phonebook
          onAddContactCard={this.addContactCard}
 />
        <Contacts contacts={this.state.contacts} />
      </>
    )
  }

}

export default App;
