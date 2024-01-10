import { useState } from "react"
import AddEducation from "./AddEducation";
import EducationList from "./EducationList";

export default function Education() {
  const [educationData, setEducationData] = useState([
    { 
      id: 1,
      school: 'Instituto Aplaplac', 
      degree: 'Software Engineer', 
      sinceDate: 'Marzo 2008', 
      untilDate: 'Mayo 2012',
    }
  ]);

  const handleAddEducation = (school, degree, sinceDate, untilDate) => {
    setEducationData([
      ...educationData,
      {
        id: crypto.randomUUID(),
        school: school,
        degree: degree,
        sinceDate: sinceDate,
        untilDate: untilDate
      }
    ]);
  };

  const handleChangeEducation = (educationItem) => {
    setEducationData(educationData.map(item => {
      if(item.id === educationItem.id) {
        return educationItem;
      } else {
        return item;
      }
    }));
  };

  const handleDeleteEducation = (educationId) => {
    setEducationData(educationData.filter(item => item.id !== educationId));
  };

  return (
    <section className="flex flex-col gap-4 my-4 items-center">
      <h2 className="text-xl font-medium text-center">Education</h2>
      <EducationList
        educationData={educationData}
        onChangeEducation={handleChangeEducation}
        onDeleteEducation={handleDeleteEducation}
      />
      <AddEducation handleAddEducation={handleAddEducation} />
    </section>
  );

}