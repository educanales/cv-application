import { useState } from "react";

export default function AddExperience({ onAddExperience }) {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [sinceDate, setSinceDate] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [shownAdd, setShownAdd] = useState(false);

  function handleAddButton() {
    setShownAdd(true);
  }  

  return (
    <>
      {shownAdd ? (
          <>
            <input 
              name="position"
              placeholder="Position"
              type="text" 
              value={position} 
              onChange={e => setPosition(e.target.value)} 
            />
            <input 
              name="company"
              placeholder="Company"
              type="text" 
              value={company} 
              onChange={e => setCompany(e.target.value)} 
            />
            <textarea 
              name="responsibilities"
              placeholder="Tell us what you do"
              value={responsibilities}
              onChange={e => setResponsibilities(e.target.value)}
            />
            <input 
              name="sinceDate"
              type="text" 
              value={sinceDate} 
              onChange={e => setSinceDate(e.target.value)} 
            />
            <input 
              name="untilDate"
              type="text" 
              value={untilDate} 
              onChange={e => setUntilDate(e.target.value)} 
            />
            <button              
              onClick={() => {
                onAddExperience(position, company, responsibilities, sinceDate, untilDate);
                setShownAdd(false);
              }}>
              Save
            </button>
          </>
      )
        : (
        <button onClick={handleAddButton}>Add</button>
        )
      }
    </>    
  )
}