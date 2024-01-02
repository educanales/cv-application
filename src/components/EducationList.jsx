import { Fragment, useState } from "react";

export default function EducationList({ educationData, onChangeEducation, onDeleteEducation }) {
  return (
    <>
      {educationData.map(item => (
        <Fragment key={item.id}>
          <EducationInfo
            item={item}
            onChange={onChangeEducation}
            onDelete={onDeleteEducation}
          />
        </Fragment>
      ))}
    </>
  )
}

function EducationInfo({ item, onChange, onDelete }) {
  const [shownList, setShownList] = useState(true);
  let educationContent;
  if (shownList) {
    educationContent = (
      <>
        <div className="mainContainer">
          <p className="dates">{item.sinceDate + ' - ' + item.untilDate}</p>
          <div className="secondContainer">
            <p className="mainP">{item.school}</p>
            <p className="secondP">{item.degree}</p>
          </div>
        </div>
        <div className="thirdContainer">
          <button onClick={() => setShownList(false)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>        
      </>
    )
  } else {
    educationContent = (
      <form>
        <input 
          type="text"
          name="school"
          placeholder="School"
          value={item.school}
          onChange={e => {
            onChange({ ...item, school: e.target.value })
          }}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={item.degree}
          onChange={e => {
            onChange({ ...item, degree: e.target.value })
          }}
        />
        <input 
          type="text"
          name="sinceDate"
          placeholder="Since Date"
          value={item.sinceDate}
          onChange={e => {
            onChange({ ...item, sinceDate: e.target.value })
          }}
        />
        <input 
          type="text"
          name="untilDate"
          placeholder="Until Date"
          value={item.untilDate}
          onChange={e => {
            onChange({ ...item, untilDate: e.target.value })
          }}
        />
        <button onClick={() => setShownList(true)}>Save</button>
      </form>
    )
  }

  return (
    <>
      {educationContent}
    </>
  )
}