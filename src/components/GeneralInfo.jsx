import { useState } from "react";
import { Fragment } from "react";

export default function GeneralInfo() {
  const [info, setInfo] = useState([
    { 
      id: 1,
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'tuemail@mail.com',
      phone: '+56912345678',
    }
  ]);
  
  function handleChangeGenInfo(genInfoItem) {
    setInfo(info.map(item => {
      if (item.id === genInfoItem.id) {
        return genInfoItem;
      } else {
        return item;
      }
    }));
  }

  
 
  return (
    <>
      {info.map(item => (
        <Fragment key={item.id}>
          <InfoInput 
            item={item}
            onChange={handleChangeGenInfo}         
          />
        </Fragment>
      ))}
    </>
  )
}

function InfoInput({ item, onChange }) {
  const [shownInfo, setShownInfo] = useState(true);
  let generalInfoContent;
  if (shownInfo) {
    generalInfoContent = (
      <>
        <h1>{item.firstName + ' ' + item.lastName}</h1>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        <button onClick={() => setShownInfo(false)}>Edit</button>
      </>
    )
  } else {
    generalInfoContent = (
      <>
        <input 
          id="firstName"
          placeholder="First Name"
          type="text"
          value={item.firstName} 
          onChange={e => {
            onChange({ ...item, firstName: e.target.value})
          }} 
        />
        <input
          id="lastName" 
          placeholder="Last Name"
          type="text" 
          value={item.lastName} 
          onChange={e => {
            onChange({ ...item, lastName: e.target.value})
          }} 
        />
        <input 
          id="email"
          placeholder="Email"
          type="text" 
          value={item.email} 
          onChange={e => {
            onChange(({ ...item, email: e.target.value}))
          }}
        />
        <input 
          id="phone"
          placeholder="Phone"
          type="text" 
          value={item.phone} 
          onChange={e => {
            onChange({ ...item, phone: e.target.value})
          }} 
        />
        <button          
          onClick={() => setShownInfo(true)}
        >
          Save
        </button>
      </>
    )
  }

  return (
    <>
      {generalInfoContent}
    </>
  )    
}
