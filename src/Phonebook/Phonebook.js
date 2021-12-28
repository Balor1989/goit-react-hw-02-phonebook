


const Phonebook =({onFormSubmit, onInputName, onInputNumber}) => (
            <>
                <h2 className="phonebookTitle">Phonebook</h2>
                    <form onSubmit={onFormSubmit}>
                        <div>
                            <label>Name</label>
                            <input onChange={onInputName}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            />
                        </div>
                        <div>
                            <label>Number</label>
                            <input onChange={onInputNumber}
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



export default Phonebook