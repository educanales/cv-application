import { useRef, useState } from "react";
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
  const [isHovering, setIsHovering] = useState(false);
  const dialogRef = useRef(null);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  const handleEditInfo = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  };

  return (
    <>
      <section
        className="py-4 flex flex-col gap-4 items-center cursor-pointer border-2 border-white hover:rounded-md hover:border-gray-400"
        onClick={handleEditInfo}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="grid grid-cols-8 gap-4 place-items-center w-full">
          <h1 className="text-3xl text-center col-start-2 col-end-8">
            {item.name}
          </h1>
          {isHovering && <EditButton className="col-start-8"/>}
        </div>
        <div className="flex gap-4">
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.address}</p>
        </div>
      </section>

      <dialog ref={dialogRef} className="rounded-lg">
        <div className="flex flex-col gap-4 items-center mb-2 p-6">
          <h2 className="text-xl">General Info</h2>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="name"
              placeholder="John Doe"
              type="text"
              value={item.name}
              onChange={(e) => {
                onChange({ ...item, name: e.target.value });
              }}
            />
            {/* <SaveButton onClick={handleEditInfo} /> */}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="email"
              placeholder="Email"
              type="text"
              value={item.email}
              onChange={(e) => {
                onChange({ ...item, email: e.target.value });
              }}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="phone"
              placeholder="Phone"
              type="text"
              value={item.phone}
              onChange={(e) => {
                onChange({ ...item, phone: e.target.value });
              }}
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="address"
              placeholder="Los Angeles, California"
              type="text"
              value={item.address}
              onChange={(e) => {
                onChange({ ...item, address: e.target.value });
              }}
            />
          </div>
          <SaveButton onClick={handleEditInfo} />
        </div>
      </dialog>
    </>
  );
}
