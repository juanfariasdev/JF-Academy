import { Route, Routes } from "react-router-dom";
import { Course } from "./pages/Course";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<h1>Estamos em desenvolvimento...</h1>}/>
            <Route path="/course" element={<Course/>}/>
        </Routes>
    )
}