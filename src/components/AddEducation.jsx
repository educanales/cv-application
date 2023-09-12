import { useState } from "react";

export default function AddEducation({ onAddEducation }) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
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
            name="school"
            placeholder="School"
            type="text" 
            value={school} 
            onChange={(e) => setSchool(e.target.value)} 
          />
          <input 
            name="degree"
            placeholder="Degree"
            type="text" 
            value={degree} 
            onChange={(e) => setDegree(e.target.value)} 
          />
          <input 
            name="sinceDate"
            type="date" 
            value={sinceDate} 
            onChange={(e) => setSinceDate(e.target.value)} 
          />
          <input 
            name="untilDate"
            type="date" 
            value={untilDate} 
            onChange={(e) => setUntilDate(e.target.value)} 
          />
          <button              
            onClick={() => {
              onAddEducation(school, degree, sinceDate, untilDate);
              setShownAdd(false);
            }}>
            Save
          </button> 
        </>
      ) : (
        <button onClick={handleAddButton}>Add</button>
      )}   
    </>
  )

}

