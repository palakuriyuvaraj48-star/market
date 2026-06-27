import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans p-6 text-center">
      <div className="max-w-md w-full bg-slate-800/50 border border-slate-700/50 backdrop-blur rounded-2xl p-8 shadow-2xl space-y-6">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
          FreshMart Pro
        </h1>
        <p className="text-slate-300">
          Enterprise-grade supermarket e-commerce ecosystem storefront template is ready.
        </p>
        <div className="inline-block bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm select-none">
          Front-End Server Running
        </div>
      </div>
    </div>
  );
}

export default App;
