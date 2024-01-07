import { useRef, useState } from "react";

export default function About() {
  const [about, setAbout] = useState(
    "Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. Proven track record of delivering high-quality projects on time and within budget."
  );
  const dialogRef = useRef(null);

  function handleClick() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <section className="flex flex-col gap-4 my-4 items-center ">
        <h2 className="text-xl font-medium text-center">About you</h2>
        <div className="flex flex-col place-items-center max-w-xl">
          <p className="mb-4">{about}</p>
          <button
            onClick={handleClick}
            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium hover:text-gray-600"
          >
            Edit
          </button>
        </div>
      </section>

      <dialog ref={dialogRef} className="rounded-lg">
        <div className="p-4 flex gap-4 flex-col place-items-center shadow-lg lg:px-8">
          <label htmlFor="about" className="block text-xl font-medium">
            About you
          </label>
          <textarea
            className="mt-2 p-1 w-full rounded-lg align-top shadow-sm sm:text-sm"
            name="about"
            id="about"
            cols="55"
            rows="5"
            value={about}
            placeholder="Tell us about you"
            onChange={(e) => setAbout(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium hover:text-gray-600"
          >
            Save
          </button>
        </div>
      </dialog>
    </>
  );
}
