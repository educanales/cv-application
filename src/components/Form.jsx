import { useState } from "react";
import "../styles/Form.css"

export default function Form() {
  const [genInfo, setGenInfo] = useState({ fName: "", lName: "", email: "", phone: "" });
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
      <form action="" className='generalInfo'>        
        <input          
          type="text" 
          value={genInfo.fName}
          onChange={handleChange}
          id='fName'
          placeholder="First Name"
        />
        <input 
          type="text" 
          value={genInfo.lName}
          onChange={handleChange}
          id='lName'
        />
        <input 
          type="text" 
          value={genInfo.email}
          onChange={handleChange}
          id='email'
        />
        <input 
          type="phone" 
          value={genInfo.phone}
          onChange={handleChange}
          id='phone'
        />
      </form>

      <form action="">
        <h2>About</h2>
          <input 
            type="text" 
            value={about}
            onChange={(e) => setAbout(e.target.value)}              
          />        
      </form>     
      
    </>
  )
}