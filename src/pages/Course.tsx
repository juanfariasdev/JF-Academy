import { Header } from "../components/Header"
import { Lesson } from "../components/Lesson"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

function Course(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 flex-col xl:flex-row">
                <Video />
                <Sidebar />
            </main>
      </div>
    )
}


export { Course }