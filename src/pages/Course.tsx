import { useState } from "react";
import { Header } from "../components/Header"
import { Lesson } from "../components/Lesson"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

function Course(){
    const [stateMenu, setStateMenu] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header stateMenu={stateMenu} setStateMenu={setStateMenu}/>
            <main className="flex flex-1 flex-col xl:flex-row [&>*]:pt-24 xl:[&>*]:pt-4">
                <Video />
                <Sidebar stateMenu={stateMenu}/>
            </main>
      </div>
    )
}


export { Course }