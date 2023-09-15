import { useState } from "react";
import { Fragment } from "react";

export default function ExperienceList({ exp, onChangeExp, onDeleteExp }) {
  return (
    <>
      {exp.map(item => (
        <Fragment key={item.id}>
          <ExperienceData 
            item={item}
            onChange={onChangeExp}
            onDelete={onDeleteExp}
          />
        </Fragment>
      ))}
    </>
  )
}

function ExperienceData({ item, onChange, onDelete }) {
  const [shownList, setShownList] = useState(true);
  let experienceContent;
  if (!shownList) {
    experienceContent = (
      <form>
        <input 
          type="text"
          name="position"
          placeholder="Position"
          value={item.position}
          onChange={e => {
            onChange({ ...item, position: e.target.value })
          }}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={item.company}
          onChange={e => {
            onChange({ ...item, company: e.target.value })
          }}
        />
        <textarea 
          name="responsibilities"       
          placeholder="Tell us what you do"
          value={item.responsibilities}
          onChange={e => {
            onChange({ ...item, responsibilities: e.target.value })
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
  } else {
    experienceContent = (
      <>
        <h3>{item.position}</h3>
        <h4>{item.company}</h4>
        <p>{item.responsibilities}</p>
        <h5>{item.sinceDate + ' - ' + item.untilDate}</h5>
        <button onClick={() => setShownList(false)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </>
    )
  }

  return (
    <>
      {experienceContent}
    </>
  )

}