import { Component } from "react/cjs/react.production.min";


class Phonebook extends Component {

    render() {
        return (
            <>
                <h2 className="phonebookTitle">Phonebook</h2>
                <form>
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    />
                    <button>Add contact</button>
                </form>
            </>
        )
    }
}

export default Phonebook