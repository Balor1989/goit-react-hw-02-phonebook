import { Component } from "react/cjs/react.production.min";



class Phonebook extends Component {

    state = {
        name: '',
        number:''
    }

    formSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.onAddContactCard(this.state)
        console.log('Submit')
    };

    inputName = e => {
        this.setState({ name: e.target.value })
        console.log(e.target.value)
    };

    inputNumber = e => {
        this.setState({ number: e.target.value })
    };

    render() {
        return (
                <>
                    <h2 className="phonebookTitle">Phonebook</h2>
                    <form onSubmit={this.formSubmit}>
                        <div>
                            <label>Name</label>
                            <input onChange={this.inputName}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            />
                        </div>
                        <div>
                            <label>Number</label>
                            <input onChange={this.inputNumber}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            />
                        </div>
            
                        <button type="submit">Add contact</button>
                    </form>
                </>
        )
    }
}



export default Phonebook