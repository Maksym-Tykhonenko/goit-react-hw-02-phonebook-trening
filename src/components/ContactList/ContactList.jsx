
const ContactList = ({ contact }) => {

    return (
        <ul>
            {contact.map(({ name, number, id }) => {
                return (
                    <li key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                    </li>
                );
            })}

        </ul>
    );
};


export default ContactList;