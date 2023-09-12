import { useState } from "react"
import AddEducation from "./AddEducation";
import EducationList from "./EducationList";

export default function Education() {
  const [educationData, setEducationData] = useState([
    { 
      id: 1,
      school: 'School', 
      degree: 'Degree', 
      sinceDate: 'Since', 
      untilDate: 'Until',
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
    ])
  }

  const handleChangeEducation = (educationItem) => {
    setEducationData(educationData.map(item => {
      if(item.id === educationItem.id) {
        return educationItem;
      } else {
        return item;
      }
    }));
  }

  const handleDeleteEducation = (educationId) => {
    setEducationData(educationData.filter(item => item.id !== educationId));
  }

  return (
    <>
      <EducationList 
        educationData={educationData}
        onChangeEducation={handleChangeEducation}
        onDeleteEducation={handleDeleteEducation}
      />
      <AddEducation onAddEducation={handleAddEducation} />
    </>
  )

}