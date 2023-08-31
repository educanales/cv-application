import { useState } from "react"

export default function Education() {
  const [educ, setEduc] = useState({ school: 'School', degree: 'Degree', date1: 'Since', date2: 'Until', show: true });

  function handleClick() {
    setEduc({ ...educ,  show: false });
  }

  if(educ.show) {
    return (
      <>
        <h3>{educ.school}</h3>
        <h4>{educ.degree}</h4>
        <h5>{educ.date1}</h5>
        <h5>{educ.date2}</h5>
        <button onClick={handleClick}>Edit</button>
      </>
    )
  } else {
      return (
        <>
          <input 
            id="school"
            type="text"
            value={educ.school}
            onChange={(e) => setEduc({ ...educ, school: e.target.value })}
          />
          <input 
            id="degree"
            type="text"
            value={educ.degree}
            onChange={(e) => setEduc({ ...educ, degree: e.target.value })}
          />
          <input 
            id="date1"
            type="date"
            value={educ.date1}
            onChange={(e) => setEduc({ ...educ, date1: e.target.value })}
          />
          <input 
            id="date2"
            type="date"
            value={educ.date2}
            onChange={(e) => setEduc({ ...educ, date2: e.target.value })}
          />
          <button
            type='submit' 
            onClick={() => setEduc({ ...educ, show: true})}
          >
            Save
          </button>
        </>
      )
  }
  
}