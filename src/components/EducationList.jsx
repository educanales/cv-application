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
      <div>
        <h3>{item.school}</h3>
        <h4>{item.degree}</h4>
        <h5>{item.sinceDate + ' - ' + item.untilDate}</h5>
        <button onClick={() => setShownList(false)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
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
          type="date"
          name="sinceDate"
          value={item.sinceDate}
          onChange={e => {
            onChange({ ...item, sinceDate: e.target.value })
          }}
        />
        <input 
          type="date"
          name="untilDate"
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