import { Browser } from "phosphor-react";
import { BrowserRouter } from "react-router-dom";
import { Course } from "./pages/Course";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>

  )
}

export default App
