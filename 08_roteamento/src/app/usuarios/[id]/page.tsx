"use client"

import { Usuario} from "@/src/modules/usuarios/types/usuarios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { usuariosMock } from "@/src/modules/usuarios/mocks/usuariosMock";


export default function DetalhesUsuario() {
    const params = useParams();
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        const userId = Number(params.id);

        let userEncontrado = null;

        for (let i = 0; i < usuariosMock.length; i++) {
            if (usuariosMock[i].id === userId) {
                userEncontrado = usuariosMock[i];
                break;
            }
        }

        if (userEncontrado) {
            setUsuario(userEncontrado);
        }
        return () => {
            console.log(`O componente do usuário ${userId} foi desmontado.`);
        };
    }, [params.id]);

    if (!usuario) {
        return <div className="p-8 text-red-500 font-bold">Usuário não encontrado</div>;
    }

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6">Detalhes do Usuário</h1>

            <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 w-96">

                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="font-semibold text-zinc-800 text-lg">
                            {usuario.nome}
                        </h3>
                        <p className="text-sm text-zinc-500">{usuario.email}</p>
                    </div>

                    <div className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm border border-blue-100">
                        ID: {usuario.id}
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-600 mt-1">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        Conta Ativa
                    </span>
                </div>

            </div>
        </main>
    );
}