


const Phonebook =({onFormSubmit, onInputChange}) => (
            <>
                <h2 className="phonebookTitle">Phonebook</h2>
                    <form onSubmit={onFormSubmit}>
                    <label>Name</label>
                    <input onChange={onInputChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    />
                    <button type="submit">Add contact</button>
                </form>
            </>
        )



export default Phonebook