export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="border-dashed border-gray-600 border-b-2 text-2xl">
          What is HTML stand for?
        </h2>

        <div className="mt-4 flex flex-col gap-2">
          <button className="p-2 border rounded-lg transition-all bg-gray-200 w-full text-left">
            Hyper Text Markup Language
          </button>
          <button className="p-2 border rounded-lg transition-all bg-gray-200 w-full text-left">
            High Tech Modern Language
          </button>
          <button className="p-2 border rounded-lg transition-all bg-gray-200 w-full text-left">
            Hyperlink and Text Management Language
          </button>
          <button className="p-2 border rounded-lg transition-all bg-gray-200 w-full text-left">
            Home Tool Markup Language
          </button>
        </div>

        <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg w-full">Next</button>
      </div>
    </div>
  );
}
