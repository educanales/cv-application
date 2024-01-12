export default function SaveButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 rounded items-center bg-gray-200 px-3 py-1.5 text-sm font-medium hover:text-gray-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-device-floppy"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
        <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M14 4l0 4l-6 0l0 -4" />
      </svg>
      Save
    </button>
  );
}