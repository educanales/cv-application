import { useState } from "react";
import { Fragment } from "react";
import AddExperience from "./AddExperience";

export default function ExpInfo() {
  const [exp, setExp] = useState([
    {
      id: 1,
      position: 'Position',
      company: 'Company',
      sinceDate: '01-01-2023',
      untilDate: '01-09-2023',
    }
  ]);
  const [shownList, setShownList] = useState(true);

  const handleEdit = () => {
    setShownList(false)
  }

  const handleSubmit = () => {
    setShownList(true)
  }

  const handleChange = (experienceItem) => {    
    setExp(exp.map(item => {
      if(item.id === experienceItem.id) {
        return experienceItem;
      } else {
        return item;
      }
    }));
  }

  const handleAddExperience = (position, company, sinceDate, untilDate) => {
    setExp([
      ...exp,
      {
        id: crypto.randomUUID(),
        position: position,
        company: company,
        sinceDate: sinceDate,
        untilDate: untilDate
      }
    ])
  }

  const experienceList = exp.map(item => (
    <Fragment key={item.id}>
      <h3>{item.position}</h3>
      <h4>{item.company}</h4>
      <h5>{item.sinceDate + ' - ' + item.untilDate}</h5>
      <button onClick={handleEdit}>Edit</button>
      <button>Delete</button>
    </Fragment>
  ))

  const inputList = (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="position"
        placeholder="Position"
        // value={exp.position}
        onChange={handleChange}
      />
      <input 
        type="text"
        name="company"
        placeholder="Company"
        // value={exp.company}
        onChange={handleChange}
      />
      <input 
        type="date"
        name="sinceDate"
        onChange={handleChange}
      />
      <input 
        type="date"
        name="untilDate"
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  )
  
  return (
    <>
      {shownList ? experienceList : inputList}
      <br />
      <AddExperience onAddExperience={handleAddExperience} />
    </>
  )
}