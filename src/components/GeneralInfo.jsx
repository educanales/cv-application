import { useState } from "react";

export default function GeneralInfo() {
  const [info, setInfo] = useState({ firstName: 'First Name', lastName: 'Last Name', email: 'tuemail@mail.com', phone: '+56912345678', show: true });

  function handleClick() {
    setInfo({ ...info,  show: false });
  }

  if (info.show) {
    return (
      <>
        <h1>{info.firstName + ' ' + info.lastName}</h1>
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <button onClick={handleClick}>Edit</button>
      </>
    )
  } else {
    return (
      <>
        <input 
          id="firstName"
          type="text" 
          value={info.firstName} 
          onChange={(e) => setInfo({ ...info, firstName: e.target.value})} 
        />
        <input
          id="lastName" 
          type="text" 
          value={info.lastName} 
          onChange={(e) => setInfo({ ...info, lastName: e.target.value})} 
        />
        <input 
          id="email"
          type="text" 
          value={info.email} 
          onChange={(e) => setInfo({ ...info, email: e.target.value})} 
        />
        <input 
          id="phone"
          type="text" 
          value={info.phone} 
          onChange={(e) => setInfo({ ...info, phone: e.target.value})} 
        />
        <button
          type='submit' 
          onClick={() => setInfo({ ...info, show: true})}
        >
          Save
        </button>
      </>
    )
  }
}

function InfoInput({ id, type, value, onChange }) {
  return (
    <input 
      id={id}
      type={type} 
      value={value} 
      onChange={onChange} 
    />
  )
    
}
