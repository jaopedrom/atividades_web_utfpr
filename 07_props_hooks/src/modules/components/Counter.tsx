"use client"

import { useState } from "react"
import { ContadorProps } from "../types/contadorProps"

export default function Contador({
    label,
    valorInicial = 0,
    min = 0,
    max = 0,
    step = 1,
}: ContadorProps) {
    const [contador, setContador] = useState(valorInicial)

    function incrementar(){
        setContador((anterior) => Math.min(anterior+step, max))
    }

    function decrementar(){
        setContador((anterior) => Math.max(anterior-step, min))
    }

    function resetar(){
        setContador(valorInicial)

    }

    const isMax = contador >= max
    const isMin = contador <= min

    return(
        <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex flex-col gap-4">
            
            <div className="text-center">
                <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{label}</p>
                <span
                className={`text-5xl font-bold tabular-nums transition-colors ${
                    isMax ? "text-emerald-500" : isMin ? "text-zinc-300" : "text-zinc-800"
                }`}
                >
                {contador}
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                min: {min} · max: {max} · step: {step}
                </p>
            </div>

            <div className="flex gap-2">
                <button
                onClick={decrementar}
                disabled={isMin}
                className="flex-1 py-2 rounded-lg bg-zinc-100 text-zinc-700 font-bold text-lg hover:bg-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                −
                </button>
                <button
                onClick={resetar}
                className="px-4 py-2 rounded-lg border border-zinc-200 text-zinc-500 text-sm hover:bg-zinc-50 transition-colors"
                >
                Reset
                </button>
                <button
                onClick={incrementar}
                disabled={isMax}
                className="flex-1 py-2 rounded-lg bg-zinc-800 text-white font-bold text-lg hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                +
                </button>
            </div>

        </div>
    )
}