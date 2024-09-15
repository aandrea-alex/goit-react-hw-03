import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import TitleSection from './TitleSection/TitleSection';
import ContactForm from './ContactForm/ContactForm';
import { TITLE } from '../js/constants';
import { getContactList } from '../js/localstorage/getContactsList';
import { saveContactList } from '../js/localstorage/saveContactsList';
import styles from './App.module.css';

function App() {
  const [contact, setContact] = useState(getContactList);

  const handleAddContact = newContact => {
    setContact(prevContact => [
      ...prevContact,
      { ...newContact, id: nanoid() },
    ]);
  };

  useEffect(() => {
    saveContactList(contact);
  }, [contact]);

  return (
    <div className={styles.container}>
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm onAddContact={handleAddContact} />
    </div>
  );
}

export default App;
