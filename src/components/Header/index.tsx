import { Hamburger, List, X } from "phosphor-react";
import { useState } from "react";
import { Logo } from "../../assets/logo"

interface IProps{
    stateMenu: boolean;
    setStateMenu: (value:boolean)=> void;
}

function Header(props: IProps){
    const {stateMenu, setStateMenu} = props;
    return (
    <header className="fixed xl:relative z-[100] h-20 w-full py-5 gap-4 flex items-center justify-between bg-gray-700 border-b border-gray-600 px-8 xl:justify-center">
        <Logo />
        
        <button
        onClick={()=>setStateMenu(!stateMenu)}
        className="flex items-center gap-0 flex-col-reverse xl:hidden"
        >
            Aulas <span className="text-blue-500 transition-all">{!stateMenu? <List size={32}/> : <X  size={32}/>}</span>
        </button>
    </header>
    )
}

export { Header }