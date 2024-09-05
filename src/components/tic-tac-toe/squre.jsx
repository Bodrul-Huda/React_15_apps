export default function Square({ value, onClick }) {
  return (
    <button
      onClick={() => onClick()}
      className="border border-red-400 bg-slate-200 text-center text-4xl h-24 w-24 hover:bg-slate-300 hover:border-red-500 hover:border-2"
    >
      {value}
    </button>
  );
}
