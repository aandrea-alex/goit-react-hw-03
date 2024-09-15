import styles from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <ul className={styles.contact}>
      {contact.map(contact => (
        <li className={styles.item} key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
