import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import TitleSection from './TitleSection/TitleSection';
import ContactForm from './ContactForm/ContactForm';
import { TITLE } from '../js/constants';
import { getContactsList } from '../js/localstorage/getContactsList';
import { saveContactsList } from '../js/localstorage/saveContactsList';
import styles from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(getContactsList);

  const handleAddContact = newContact => {
    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  useEffect(() => {
    saveContactsList(contacts);
  }, [contacts]);

  return (
    <div className={styles.container}>
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm onAddContact={handleAddContact} />
    </div>
  );
}

export default App;
