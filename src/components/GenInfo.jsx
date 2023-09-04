import { useState } from "react";

export default function GenInfo() {
  const [personalInfo, setPersonalInfo] = useState([
    {
      name: 'Nombre',
      email: 'tuemail@mail.com',
      phone: '+56912345678'
    }
  ]);


  return (
    <>
      <input 
        id="name"
        type="text"
        placeholder="Name"
        value={personalInfo.name}
        onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value})}
      />
      <input 
        id="email"
        type="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value})}
      />
      <input 
        id="phone"
        type="phone"
        placeholder="Phone"
        value={personalInfo.phone}
        onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value})}
      />
      
    </>
  )
}