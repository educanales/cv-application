import { Fragment, useState } from "react";
import SaveButton from "../icons/SaveButton";
import Button from "./Button";

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
  const [showList, setShowList] = useState(true);
  let educationContent;

  const handleShowList = () => {
    setShowList(!showList);
  }

  const handleDelete = () => {
    onDelete(item.id);
  }

  if (showList) {
    educationContent = (
      <>
        <div className="flex gap-4 items-baseline justify-between w-4/5 p-2 my-2">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium">{item.school}</p>
            <p className="text-lg">{item.degree}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">{item.sinceDate + " - " + item.untilDate}</p>
            <div className="flex gap-2 place-content-center">
              <Button onClick={handleShowList} text="Edit" />
              <Button onClick={handleDelete} text="Delete" />
            </div>
          </div>
        </div>
      </>
    );
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
        <SaveButton onClick={handleShowList} />
      </form>
    )
  }

  return (
    <>
      {educationContent}
    </>
  )
}