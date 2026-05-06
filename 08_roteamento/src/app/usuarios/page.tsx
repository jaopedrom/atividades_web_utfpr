"use client"

import { Usuario} from "@/src/modules/usuarios/types/usuarios";
import { usuariosMock } from "@/src/modules/usuarios/mocks/usuariosMock";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Usuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUsuarios(usuariosMock);
        }, 50);

        return () => clearTimeout(timer);
    }, []);
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold text-white">Lista de Usuários</h1>
            <p className="mt-4 text-white mb-6">Clique em um usuário para ver os detalhes:</p>

            <ul className="space-y-2">

                {usuarios.map(user => (
                    <li key={user.id} className="p-2 border rounded ">
                        <Link href={`/usuarios/${user.id}`} className="text-white font-semibold">
                            {user.nome}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}