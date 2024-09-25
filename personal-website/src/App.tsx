import React from "react";
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#A6C36F]">
      <h1 className="text-5xl font-bold text-white mb-auto">Varun Palleti</h1>
      <footer className="mt-auto p-4">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Varun Palleti. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
