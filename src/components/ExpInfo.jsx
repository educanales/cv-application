import { useState } from "react";
import AddExperience from "./AddExperience";
import ExperienceList from "./ExperienceList";

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
  
  return (
    <>
      <ExperienceList 
        exp={exp}
        onChangeExp={handleChange}
      />
      <br />
      <AddExperience onAddExperience={handleAddExperience} />
    </>
  )
}