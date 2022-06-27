import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
    sidebarOpen: boolean,
    openSidebar: () => void,
    closeSidebar: () => void,
}

export function Header(props: HeaderProps) {
    return (
        <header className="w-full px-6 py-4 md:py-5 flex items-center justify-between md:justify-center z-[100] bg-gray-700 border-b border-gray-600">
            <Logo />

            <div className="flex items-center gap-2 md:hidden">
            <p className="text-sm">Aulas</p>
                {props.sidebarOpen
                    ?  <X onClick={props.closeSidebar} size={32} className="text-blue-400 cursor-pointer"/>
                    :  <List onClick={props.openSidebar} size={32} className="text-blue-400 cursor-pointer"/>
                }
            </div>
        </header>
    )
}