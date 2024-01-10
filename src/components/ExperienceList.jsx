import { useState } from "react";
import { Fragment } from "react";
import Button from "./Button";
import SaveButton from "../icons/SaveButton";

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
        <SaveButton onClick={() => setShownList(true)} />
      </form>
    )
  } else {
    experienceContent = (
      <>
        <div className="flex gap-4 items-baseline justify-between w-4/5 p-2 my-2">
          <div className="flex flex-col gap-1">
            <p className="text-lg">{item.position}</p>
            <p>{item.company}</p>
            <p className="mt-2">{item.responsibilities}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>{item.sinceDate + " - " + item.untilDate}</p>
            <div className="flex gap-2 place-content-center">
              <Button onClick={() => setShownList(false)} text="Edit" />
              <Button onClick={() => onDelete(item.id)} text="Delete" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {experienceContent}
    </>
  )

}