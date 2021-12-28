

const Contacts = ({ contacts, onDeleteContactCard }) => (
    <>
    <ul>
        {contacts.map(({ id, name, number}) => (
            <li key={id} >
                <p>{name}: {number}</p>
                <button onClick={() => onDeleteContactCard(id)}>Delete</button>
                </li>
     ))}

    </ul>
     </>
)

export default Contacts