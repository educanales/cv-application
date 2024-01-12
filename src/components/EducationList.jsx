import { Fragment, useRef, useState } from "react";
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
  const dialogRef = useRef(null);

  const handleShowList = () => {
    setShowList(!showList);
  }

  const handleDelete = () => {
    onDelete(item.id);
  }

  const handleEditInfo = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <>
      <div className="flex gap-4 items-baseline justify-between w-4/5 p-2 my-2">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium">{item.school}</p>
          <p className="text-lg">{item.degree}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="">{item.sinceDate + " - " + item.untilDate}</p>
          <div className="flex gap-2 place-content-center">
            <Button onClick={handleEditInfo} text="Edit" />
            <Button onClick={handleDelete} text="Delete" />
          </div>
        </div>
      </div>

      <dialog ref={dialogRef} className="rounded-lg">
        <form className="flex flex-col gap-4 items-center mb-2 p-6">
          <h2 className="text-xl">Education</h2>
          <div>
            <label
              htmlFor="school"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              School:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="school"
              name="school"
              placeholder="Instituto APLAPLAC"
              value={item.school}
              onChange={(e) => {
                onChange({ ...item, school: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="degree"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Degree:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="degree"
              type="text"
              name="degree"
              placeholder="Degree"
              value={item.degree}
              onChange={(e) => {
                onChange({ ...item, degree: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="sinceDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Since
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="sinceDate"
              type="text"
              name="sinceDate"
              placeholder="Since Date"
              value={item.sinceDate}
              onChange={(e) => {
                onChange({ ...item, sinceDate: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="untilDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Until
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="untilDate"
              type="text"
              name="untilDate"
              placeholder="Until Date"
              value={item.untilDate}
              onChange={(e) => {
                onChange({ ...item, untilDate: e.target.value });
              }}
            />
          </div>
          <SaveButton onClick={handleShowList} />
        </form>
      </dialog>
    </>
  );
}