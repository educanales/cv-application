import { useRef, useState } from "react";
import SaveButton from "../icons/SaveButton";
import EditButton from "../icons/EditButton";

export default function About() {
  const [about, setAbout] = useState(
    "Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. Proven track record of delivering high-quality projects on time and within budget."
  );
  const [isHovering, setIsHovering] = useState(false);
  const dialogRef = useRef(null);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

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
      <section
        className="flex flex-col gap-4 py-4 items-center cursor-pointer border-2 border-white hover:rounded-md hover:border-gray-400"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="grid grid-cols-8 gap-4 place-items-center w-full">
          <h2 className="text-xl font-medium text-center col-start-2 col-end-8">
            About you
          </h2>
          {isHovering && <EditButton className="col-start-8" />}
        </div>
        <div className="flex flex-col place-items-center max-w-xl">
          <p className="">{about}</p>
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
          <SaveButton onClick={handleClick} />
        </div>
      </dialog>
    </>
  );
}
