"use client"

import Contador from "../modules/components/Counter";
import { useState } from "react";

export default function Home() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [step, setStep] = useState(0)

  return (
    <div>

      <div className="flex flex-col gap-4 mb-4">

        <div className="flex gap-3">
          
          <div className="flex flex-col w-full">
            <label className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
              Min
            </label>
            <input
              type="number" value={min} onChange={(e) => setMin(Number(e.target.value))}
              className="px-3 py-2 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-700"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
              Max
            </label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="px-3 py-2 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-700"
            />
          </div>

        </div>

        <div className="flex flex-col">
          <label className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
            Step
          </label>
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="px-3 py-2 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-700"
          />
        </div>

      </div>
      
      <Contador
      label="teste"
      valorInicial={min}
      min={min}
      max={max}
      step={step}></Contador>

    </div>
  );
}
