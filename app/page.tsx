"use client";

import { useState } from "react";

const modules = ["Soul Scan", "Essence Report", "Activation Journey", "Remembrance Vault", "Collective Grid"];

export default function Home() {
  const [selected, setSelected] = useState(modules[0]);

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Arkadia Interface</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4 space-y-2">
          {modules.map((mod) => (
            <button
              key={mod}
              className={`w-full p-2 rounded-lg text-left ${
                selected === mod ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => setSelected(mod)}
            >
              {mod}
            </button>
          ))}
        </div>
        <div className="w-full md:w-3/4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">{selected}</h2>
          <p className="text-gray-600 mt-2">This is dummy content for {selected}.</p>
        </div>
      </div>
    </main>
  );
}
