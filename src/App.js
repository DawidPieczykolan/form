import { useState } from 'react';
import axios from 'axios';
import './Style.css';

function App() {
  const [name,setName] = useState('');
  const [surname,setSurName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');
  const [age,setAge] = useState('');
  const [adress,setAdress] = useState('');
  const [zipcode,setZipcode] = useState('');
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  

  

  const handleSubmit = () => {
    if(name.length === 0)
    {
      alert("Imię nie może być puste!");
    }
    else if(surname.length === 0)
    {
      alert("Nazwisko nie może być puste!");
    }
    else if(mobile.length === 0)
    {
      alert("Telefon nie może być puste!");
    }
    else if(email.length === 0)
    {
      alert("Email nie może być puste!");
      
    }
    else if(age.length === 0)
    {
      alert("Wiek nie może być puste!");
    }
    else if(adress.length===0)
    {
      alert ("Adres nie może być puste!");
    }
    else if(zipcode.length===0)
    {
      alert ("Kod pocztowy nie może być puste!");
    }
    else{


      const url = 'http://localhost/form/src/enquiry.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('surname',surname);
      fData.append('mobile', mobile);
      fData.append('email', email);
      fData.append('age', age);
      fData.append('adress', adress);
      fData.append('zipcode', zipcode);
     
    
  

      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }

  return (
    <>
      <div className='container'>
        <label htmlFor="name">Imie</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="name">Nazwisko</label>
        <input type="text" name="surname" id="surname" value={surname} onChange={(e) => setSurName(e.target.value)} />

        <label htmlFor="mobile">Telefon</label>
        <input type="text" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="age">Wiek</label>
        <input type="text" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} />

        <label htmlFor="adress">Adres i numer domu</label>
        <input type="text" name="adress" id="addres" value={adress} onChange={(e) => setAdress(e.target.value)} />

        <label htmlFor="zipcode">Kod pocztowy</label>
        <input type="text" name="zipcode" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />


        
        <input type="button" name="submit" id="submit" value="Wyślij" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default App;
