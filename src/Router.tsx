import { Route, Routes } from "react-router-dom";
import { Course } from "./pages/Course";
import { Subscribe } from "./pages/Subscribe";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Subscribe/>}/>
            <Route path="/course/:courseSlug" element={<Course/>}/>
            <Route path="/course/:courseSlug/:lessonSlug" element={<Course/>}/>
        </Routes>
    )
}