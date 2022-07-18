import { Route, Routes } from "react-router-dom";
import { Course } from "./pages/Course";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<h1>Estamos em desenvolvimento...</h1>}/>
            <Route path="/course/:courseSlug" element={<Course/>}/>
            <Route path="/course/:courseSlug/:lessonSlug" element={<Course/>}/>
        </Routes>
    )
}