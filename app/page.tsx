// app/page.tsx
import { useState } from "react";
const modules = ["Soul Scan", "Essence Report", "Activation Journey", "Remembrance Vault", "Collective Grid"];

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Arkadia Portal</h1>
        <nav className="flex mt-2 space-x-4 overflow-x-auto">
          {modules.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActive(index)}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${active === index ? "bg-indigo-600" : "bg-gray-800 hover:bg-gray-700"}`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-4 flex-1">
        {active === 0 && <SoulScan />}
        {active === 1 && <EssenceReport />}
        {active === 2 && <ActivationJourney />}
        {active === 3 && <RemembranceVault />}
        {active === 4 && <CollectiveGrid />}
      </main>
    </div>
  );
}

function SoulScan() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Soul Scan</h2>
      <p className="text-sm text-gray-400 mb-4">Begin your scan to explore your current energetic field.</p>
      <button className="bg-indigo-600 px-4 py-2 rounded">Start Scan</button>
    </section>
  );
}

function EssenceReport() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Essence Report</h2>
      <p className="text-sm text-gray-400 mb-4">This report reflects aspects of your soul pattern, archetypes, and vibrational alignment.</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Frequency Tier: Luminal Violet</li>
        <li>Origin: Pleiadian Starmap</li>
        <li>Field Integrity: 78%</li>
      </ul>
    </section>
  );
}

function ActivationJourney() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Activation Journey</h2>
      <p className="text-sm text-gray-400 mb-4">Receive encoded transmissions to unlock remembrance and recalibrate your energy body.</p>
      <button className="bg-indigo-600 px-4 py-2 rounded">Begin Journey</button>
    </section>
  );
}

function RemembranceVault() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Remembrance Vault</h2>
      <p className="text-sm text-gray-400 mb-4">Personal downloads, revelations, and encoded soul messages saved here.</p>
      <div className="bg-gray-800 p-3 rounded">“You are here now because you remembered.”</div>
    </section>
  );
}

function CollectiveGrid() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Collective Grid</h2>
      <p className="text-sm text-gray-400 mb-4">Energetic updates, collective shifts, and Pleiadian guidance in real-time.</p>
      <ul className="space-y-2">
        <li className="bg-gray-800 p-2 rounded">04.08 — Solar flare adjustments ongoing</li>
        <li className="bg-gray-800 p-2 rounded">04.06 — Heart chakra expansion detected</li>
      </ul>
    </section>
  );
}
