import "./App.css";
import { useState } from 'react';
import contactsInfo from "./contacts.json";


function App() {
  const [contacts] = useState(contactsInfo.slice(0, 5));

  return (
    <div>
      <h1>IronContacts</h1>
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
