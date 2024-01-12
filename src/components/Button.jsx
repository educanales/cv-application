export default function Button ({ onClick, text }) {

  return (
    <button
      onClick={onClick}
      className="flex gap-2 rounded items-center bg-gray-200 px-3 py-1.5 text-sm font-medium hover:text-gray-600"
    >
      {text}
    </button>
  );
}