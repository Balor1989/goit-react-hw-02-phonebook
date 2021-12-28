

const Contacts = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name, number}) => (
            <li key={id} >
                <p>{name}: {number}</p>
                <button>Delete</button>
                </li>
     ))}

    </ul>

)

export default Contacts