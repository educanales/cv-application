import { useState } from "react"

export default function About() {
  const [about, setAbout] = useState('Some things about you');
  const [shown, setShown] = useState(true);  
  let aboutContent;

  function handleClick() {
    setShown((prev) => !prev)
  }

  shown ? aboutContent = (
    <>
      <p>{about}</p>
      <button onClick={handleClick}>Edit</button>
    </>
  ) : 
    aboutContent = (
      <>
        <textarea 
          name="about" 
          id="about" 
          cols="50" 
          rows="3"
          value={about}
          placeholder='Tell us about you'
          onChange={e => setAbout(e.target.value)}              
        />
        <button onClick={handleClick}>Save</button>
      </>
    )
  

  return (
    <>
      <h2>About you</h2>
      {aboutContent}     
    </>
  )
}