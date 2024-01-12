import { useState } from "react";

export default function Form() {
  const [genInfo, setGenInfo] = useState({ name: "", email: "", phone: "", address: "" });
  const [about, setAbout] = useState("")

  function handleChange(e) {
    setGenInfo((prev) => {
      let helper = { ...prev };
      helper [`${e.target.id}`] = e.target.value;
      return helper;
    })
  }

  return (
    <>
      <form className="flex flex-col gap-4 items-center">
        <input
          className="text-3xl text-center block mt-4 bg-transparent border-0 appearance-none focus:outline-none "
          type="text"
          value={genInfo.name}
          onChange={handleChange}
          id="name"
          placeholder="Name"
        />
        <div className="">
          <input
            className=" "
            type="text"
            value={genInfo.email}
            onChange={handleChange}
            id="email"
            placeholder="Email"
          />
          <input
            className=" "
            type="phone"
            value={genInfo.phone}
            onChange={handleChange}
            id="phone"
            placeholder="Phone"
          />
          <input
            className=" "
            type="text"
            value={genInfo.address}
            onChange={handleChange}
            id="address"
            placeholder="Address"
          />
        </div>
      </form>

      <hr />

      <form action="">
        <h2 className="">About</h2>
        <textarea
          rows="6"
          value={about}
          placeholder="Something about you"
          onChange={(e) => setAbout(e.target.value)}
        />
      </form>
    </>
  );
}