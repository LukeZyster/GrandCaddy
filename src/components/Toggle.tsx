import { useState } from "react";

export default function Toggle() {
  const [selected, setSelected] = useState<"senior" | "caddy">("senior");

  return (
    <div className="flex w-full rounded-full bg-[#EEF0F8] p-1">
      <button
        onClick={() => setSelected("senior")}
        className={`flex-1 rounded-full py-3 text-sm font-semibold transition ${
          selected === "senior"
            ? "bg-white text-[#0B5FFF] shadow"
            : "text-gray-500"
        }`}
      >
        Senior / Family
      </button>

      <button
        onClick={() => setSelected("caddy")}
        className={`flex-1 rounded-full py-3 text-sm font-semibold transition ${
          selected === "caddy"
            ? "bg-white text-[#0B5FFF] shadow"
            : "text-gray-500"
        }`}
      >
        Caddy
      </button>
    </div>
  );
}