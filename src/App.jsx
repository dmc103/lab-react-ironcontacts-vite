import "./App.css";
import { useState } from 'react';
import contactsInfo from "./contacts.json";


function App() {
  const [contacts, setContacts] = useState(contactsInfo.slice(0, 5));
  const contactsLeft = useState(contactsInfo.slice(0, 5));


  const addRandomContact = () => {
    const availContacts = contactsInfo.filter(
      (contact) => !contacts.some((displayedContact) => displayedContact.id === contact.id)
    );

     if(contactsLeft.length > 0) {
       const randomContact = availContacts[Math.floor(Math.random() * availContacts.length)];
       setContacts([...contacts, randomContact]);
       setContacts(contact => [...contact, randomContact]);
     }
    };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContacts);

  };


  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  }






  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>

            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🌟' : ''}</td>


          </tr>
        )

        )}

      
      </tbody>


      </table>
    </div>
    
  );
}

export default App;
