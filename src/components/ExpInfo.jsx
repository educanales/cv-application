import { useState } from "react";
import { Fragment } from "react";

export default function ExpInfo() {
  const [exp, setExp] = useState([]);
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [sinceDate, setSinceDate] = useState('');
  const [untilDate, setUntilDate] = useState('');

  function handleClick(e) {
    e.preventDefault();
    setExp([ ...exp, 
      { id: crypto.randomUUID(), position: position, company: company, sinceDate: sinceDate, untilDate: untilDate, show: true }
    ])    
  }

  function handleEdit() {
    setExp({ ...exp, show: false });
  }

  
  const experienceList = exp.map(item => (
    <Fragment key={item.id}>
      <h3>{item.position}</h3>
      <h4>{item.company}</h4>
      <h5>{item.sinceDate + ' - ' + item.untilDate}</h5>
      {/* <p>{item.id}</p> */}
      <button>Edit</button>
    </Fragment>
  ))

  return (
    <>
      <div>
        {experienceList}
      </div>
      <input
        type="text"
        value={position}
        placeholder="Position"
        onChange={e => setPosition(e.target.value)}
      />
      <input 
        type="text"
        value={company}
        placeholder="Company"
        onChange={e => setCompany(e.target.value)}
      />
      <input 
        type="date"
        value={sinceDate}        
        onChange={e => setSinceDate(e.target.value)}
      />
      <input 
        type="date"
        value={untilDate}        
        onChange={e => setUntilDate(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleClick}
      >Save
      </button>
          
    
    </>
  )
}

const lista = [
  {
    id: 1, position: 'Developer', company: 'Freelance', sinceDate: "2023-01-17", untilDate: "Actual"
  }
]