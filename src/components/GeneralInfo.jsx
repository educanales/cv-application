import { useState } from "react";
import { Fragment } from "react";
import EditButton from "../icons/EditButton";
import SaveButton from "../icons/SaveButton";

export default function GeneralInfo() {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+56912345678",
      address: "Los Angeles, California",
    },
  ]);

  function handleChange(genInfoItem) {
    setInfo(
      info.map((item) => {
        if (item.id === genInfoItem.id) {
          return genInfoItem;
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      {info.map((item) => (
        <Fragment key={item.id}>
          <InfoInput item={item} onChange={handleChange} />
        </Fragment>
      ))}
    </>
  );
}

function InfoInput({ item, onChange }) {
  const [shownInfo, setShownInfo] = useState(true);
  let generalInfoContent;

  const handleEditInfo = () => {
    setShownInfo(!shownInfo);
  };

  if (shownInfo) {
    generalInfoContent = (
      <div
        className="mb-4 flex flex-col gap-4 items-center cursor-pointer border-2 border-white hover:rounded-md hover:border-gray-400"
        onClick={handleEditInfo}
      >
        <div className="grid grid-cols-8 gap-4 w-full">
          <h1 className="text-3xl text-center mt-4 col-start-2 col-end-8">
            {item.name}
          </h1>
          {/* <EditButton onClick={handleEditInfo} className="" /> */}
        </div>
        <div className="flex gap-4">
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.address}</p>
        </div>
      </div>
    );
  } else {
    generalInfoContent = (
      <div className="flex flex-col gap-4 items-center mb-4">
        <div className="grid grid-cols-8 gap-4 w-full">
          <input
            className="text-3xl text-center col-start-2 col-end-8 block mt-4 bg-transparent border-0 appearance-none focus:outline-none "
            id="name"
            placeholder="Name"
            type="text"
            value={item.name}
            onChange={(e) => {
              onChange({ ...item, name: e.target.value });
            }}
          />
          <SaveButton onClick={handleEditInfo} className="ml-auto" />
        </div>

        <div className="flex justify-center">
          <input
            className="block text-center px-0 w-full text-gray-900 bg-transparent border-1 border-solid appearance-none focus:outline-none focus:ring-0 focus:border-blue600 peer"
            id="email"
            placeholder="Email"
            type="text"
            value={item.email}
            onChange={(e) => {
              onChange({ ...item, email: e.target.value });
            }}
          />
          <input
            className="block text-center px-0 w-full text-gray-900 bg-transparent border-1 border-solid appearance-none focus:outline-none focus:ring-0 focus:border-blue600 peer"
            id="phone"
            placeholder="Phone"
            type="text"
            value={item.phone}
            onChange={(e) => {
              onChange({ ...item, phone: e.target.value });
            }}
          />
          <input
            className="block text-center px-0 w-full text-gray-900 bg-transparent border-1 border-solid appearance-none focus:outline-none focus:ring-0 focus:border-blue600 peer"
            id="address"
            placeholder="Address"
            type="text"
            value={item.address}
            onChange={(e) => {
              onChange({ ...item, address: e.target.value });
            }}
          />
        </div>
        {/* <button onClick={handleEditInfo}>Save</button> */}
      </div>
    );
  }

  return <>{generalInfoContent}</>;
}
