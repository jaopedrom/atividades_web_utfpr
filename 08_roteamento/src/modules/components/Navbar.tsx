import Link from "next/link";


export default function Navbar(){
    return (
        <nav className="p-5 place-content-center">
            <div className="flex flex-row items-center justify-center h-full">
                <ul className="flex items-center gap-10">
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/20 hover:text-white">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/20 hover:text-white">
                        <Link href="/usuarios" className="nav-link">Usuarios</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/20 hover:text-white">
                        <Link href="/sobre" className="nav-link">Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}