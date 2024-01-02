import { useState } from "react";
import "../styles/Form.css"

export default function Form() {
  const [genInfo, setGenInfo] = useState({ name: "", email: "", phone: "", address: "" });
  const [about, setAbout] = useState("")

  function handleChange(e) {
    setGenInfo((prev) => {
      let helper = { ...prev };
      helper [`${e.target.id}`] = e.target.value;
      return helper;
    })
  }

  return (
    <>
      <form className='generalInfo'>
        <input
          className="nameInput textAlign"
          type="text"
          value={genInfo.name}
          onChange={handleChange}
          id='name'
          placeholder="Name"
        />
        <div className="inputContainer">
          <input
            className="secondaryInput textAlign"
            type="text"
            value={genInfo.email}
            onChange={handleChange}
            id='email'
            placeholder="Email"
          />
          <input
            className="secondaryInput textAlign"
            type="phone" 
            value={genInfo.phone}
            onChange={handleChange}
            id='phone'
            placeholder="Phone"
          />
          <input
            className="secondaryInput textAlign"
            type="text"
            value={genInfo.address}
            onChange={handleChange}
            id="address"
            placeholder="Address"
          />
        </div>
      </form>

      <hr />

      <form action="">
        <h2 className="textAlign">About</h2>
          <textarea
            rows="6"
            value={about}
            placeholder="Something about you"
            onChange={(e) => setAbout(e.target.value)}
          />        
      </form>      
    </>
  )
}