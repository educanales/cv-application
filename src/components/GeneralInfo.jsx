import { useState } from "react";
import { Fragment } from "react";
import '../styles/GeneralInfo.css'

export default function GeneralInfo() {
  const [info, setInfo] = useState([
    { 
      id: 1,
      name: 'Name',
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
      <div className="genInfoContent">
        <h1>{item.name}</h1>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        <button onClick={() => setShownInfo(false)}>Edit</button>
      </div>
    )
  } else {
    generalInfoContent = (
      <div className="genInfoContent">
        <input 
          id="name"
          placeholder="Name"
          type="text"
          value={item.name} 
          onChange={e => {
            onChange({ ...item, name: e.target.value})
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
      </div>
    )
  }

  return (
    <>
      {generalInfoContent}
    </>
  )    
}
