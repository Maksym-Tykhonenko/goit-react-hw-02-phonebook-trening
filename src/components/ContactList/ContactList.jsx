import css from './ContactList.module.css';

const ContactList = ({ contact, deliteContact }) => {

    return (
        <ul className={css.list}>
            {contact.map(({ name, number, id }) => {
                return (
                    <li className={css.item} key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <button
                            className={css.btn}    
                            type="button" 
                            onClick={() => deliteContact(id)}
                        >DEL</button>
                    </li>
                );
            })}
        </ul>
    );
};


export default ContactList;