import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

function Course(){
    const [stateMenu, setStateMenu] = useState(false);
    const { courseSlug, lessonSlug } = useParams<{courseSlug: string, lessonSlug: string}>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header stateMenu={stateMenu} setStateMenu={setStateMenu}/>
            <main className="flex flex-1 flex-col xl:flex-row [&>*]:pt-24 xl:[&>*]:pt-4">
                {courseSlug || lessonSlug? 
                <Video lessonSlug={lessonSlug}/> 
                : 
                (<div className="flex-1"></div>)}
                <Sidebar courseSlug={courseSlug} stateMenu={stateMenu}/>
            </main>
      </div>
    )
}


export { Course }