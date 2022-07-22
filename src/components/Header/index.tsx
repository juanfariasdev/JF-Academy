import { List, X } from "phosphor-react";
import { Logo } from "../../assets/logo"

interface IProps{
    stateMenu?: boolean;
    setStateMenu?: (value:boolean)=> void;
}

function Header(props: IProps){
    const {stateMenu, setStateMenu} = props;
    return (
    <header 
    className="flex items-center justify-between gap-4 w-full h-20 py-5 px-8 bg-gray-700 border-b border-gray-600 
    fixed z-[100]
    xl:relative xl:justify-center"
    >
        <Logo />

{!!setStateMenu &&
        <button
        onClick={()=>setStateMenu(!stateMenu)}
        className="flex flex-col-reverse items-center gap-0
        xl:hidden"
        >
            Aulas <span className="text-blue-500 transition-all">{!stateMenu? <List size={32}/> : <X  size={32}/>}</span>
        </button>
}
    </header>
    )
}

export { Header }