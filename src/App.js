import { Component } from "react/cjs/react.production.min";
import Contacts from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";
import shortid from "shortid";
import Filter from "./Filter";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


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
    const { contacts } = this.state
    const { name, number } = values
    const repeatName = contacts.find(contact => {
          return contact.name.toLowerCase() === values.name.toLowerCase()
         })
          if (repeatName) {
            Notify.warning(`${values.name} is already in contacts`)
            return
          } 

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
         Notify.success(`${values.name} is added in contacts`)
          }

  deleteContactCard = (cardId) => {
    this.setState(prevState => (
      {contacts: prevState.contacts.filter(contact => contact.id !== cardId)}
    ))
  }
  
  // deleteTodo = (todoId) => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId)
  //   }));
  // }

  filterChange = (e) => {
    this.setState({ filter: e.target.value })
    console.log(e.target.value)
  }
  

  render() {
    const { contacts, filter } = this.state

    const normalizedFilter = filter.toLowerCase();
    const visibleContactCards = contacts.filter( contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <>
        <Phonebook
          onAddContactCard={this.addContactCard} />
        <Filter onFilterChange={this.filterChange}
                value={filter}
        />
        <Contacts contacts={visibleContactCards}
        onDeleteContactCard={this.deleteContactCard} 
        />
      </>
    )
  }

}

export default App;
