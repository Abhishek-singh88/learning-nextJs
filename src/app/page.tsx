import "./globals.css";

export default function Home() {
  return (
   <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-4">
  <h2 className="text-xl font-semibold">Card Title</h2>
  <p className="text-gray-600">This is a card with Tailwind classNames.</p>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600">
    Click Me
  </button>
</div>

  )
}