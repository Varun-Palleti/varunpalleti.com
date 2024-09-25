import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'; // You can keep this for now if you want to keep some custom CSS

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex space-x-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mt-8">Vite + React + Tailwind</h1>
      <div className="card mt-6 p-6 bg-white rounded-lg shadow-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-6 text-sm text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
