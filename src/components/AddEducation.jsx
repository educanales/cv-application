import { useRef, useState } from "react";
import Button from "./Button";

export default function AddEducation({ handleAddEducation }) {
  // const [form, setForm] = useState({
  //   school: "",
  //   degree: "",
  //   sinceDate: "",
  //   untilDate: "",
  // })
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [sinceDate, setSinceDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  const dialogRef = useRef(null);

  const handleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  const handleSave = (school, degree, sinceDate, untilDate) => {
    handleAddEducation(school, degree, sinceDate, untilDate);
    handleDialog();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
        <Button onClick= {handleDialog} text="Add" />

      <dialog ref={dialogRef} className="rounded-lg">
        <div className="flex flex-col gap-4 items-center mb-2 p-6">
          <div>
            <label
              htmlFor="school"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              School:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="school"
              name="school"
              placeholder="School"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
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
              name="degree"
              placeholder="Degree"
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="sinceDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Since:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="sinceDate"
              name="sinceDate"
              placeholder="Since Date"
              type="text"
              value={sinceDate}
              onChange={(e) => setSinceDate(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="untilDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Until:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="untilDate"
              name="untilDate"
              placeholder="Until Date"
              type="text"
              value={untilDate}
              onChange={(e) => setUntilDate(e.target.value)}
            />
          </div>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => handleSave(school, degree, sinceDate, untilDate)}
              text="Save"
            />
              <Button onClick={handleDialog} text="Cancel" />
          </div>
        </div>
      </dialog>
    </>
  );
}
