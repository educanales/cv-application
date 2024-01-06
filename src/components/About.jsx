import { useRef, useState } from "react"

export default function About() {
  const [about, setAbout] = useState(
    "Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. Proven track record of delivering high-quality projects on time and within budget."
  );
  const dialogRef = useRef(null);

  function handleClick() {
    if(!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  return (
    <>
      <section className="flex flex-col gap-4 my-4 items-center ">
        <h2 className="text-xl text-center">About you</h2>
        <div className="flex flex-col max-w-xl">
          <p className="">{about}</p>
          <button onClick={handleClick}>Edit</button>
        </div>
      </section>

      <dialog ref={dialogRef}>
        <div className="p-4 flex gap-4 flex-col place-items-center">
          <textarea
            name="about"
            id="about"
            cols="55"
            rows="3"
            value={about}
            placeholder="Tell us about you"
            onChange={(e) => setAbout(e.target.value)}
          />
          <button onClick={handleClick}>Save</button>
        </div>
      </dialog>
    </>
  );
}