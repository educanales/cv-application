import { useState } from "react";
import AddExperience from "./AddExperience";
import ExperienceList from "./ExperienceList";

export default function Experience() {
  const [exp, setExp] = useState([
    {
      id: 1,
      position: 'Front-end Developer',
      company: 'Fancy Co',
      responsibilities: 'Building web applications from scratch, as well as continuous maintenance and updates as needed. Close collaboration with designers, frontend developers, and other team members to achieve common goals. Efficient identification and resolution of issues to ensure smooth operation of web applications.',
      sinceDate: 'January 2020',
      untilDate: 'Present',
    }
  ]);

  const handleAddExperience = (
    position,
    company,
    responsibilities,
    sinceDate,
    untilDate
  ) => {
    setExp([
      ...exp,
      {
        id: crypto.randomUUID(),
        position: position,
        company: company,
        responsibilities: responsibilities,
        sinceDate: sinceDate,
        untilDate: untilDate,
      }
    ]);
  };

  const handleChange = (experienceItem) => {    
    setExp(exp.map(item => {
      if(item.id === experienceItem.id) {
        return experienceItem;
      } else {
        return item;
      }
    }));
  }

  const handleDelete = (expId) => {
    setExp(exp.filter(item => item.id !== expId));
  }
  
  return (
    <section className="flex flex-col gap-4 my-4 items-center">
      <h2 className="text-xl font-medium text-center">Experience</h2>
      <ExperienceList
        exp={exp}
        onChangeExp={handleChange}
        onDeleteExp={handleDelete}
      />      
      <AddExperience handleAddExperience={handleAddExperience} />
    </section>
  );
}