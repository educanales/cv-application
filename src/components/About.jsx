import { useState } from "react"

export default function About() {
  const [about, setAbout] = useState(
    "Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. Proven track record of delivering high-quality projects on time and within budget."
  );
  const [shown, setShown] = useState(true);  
  let aboutContent;

  function handleClick() {
    setShown((prev) => !prev)
  }

  shown ? aboutContent = (
    <div className="flex flex-col max-w-xl">
      <p className="">{about}</p>
      <button onClick={handleClick}>Edit</button>
    </div>
  ) : 
    aboutContent = (
      <>
        <textarea
          name="about" 
          id="about" 
          cols="55"
          rows="3"
          value={about}
          placeholder='Tell us about you'
          onChange={e => setAbout(e.target.value)}              
        />
        <button onClick={handleClick}>Save</button>
      </>
    )
  

  return (
    <section className="flex flex-col gap-4 my-4 items-center ">
      <h2 className="text-xl text-center">About you</h2>
      {aboutContent}
    </section>
  );
}