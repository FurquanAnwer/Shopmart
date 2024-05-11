import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/:categoryId" element={<Category/>}></Route>
        </Routes>
        // <Routes>
        //     <Route path="/" element={<Home/>}</Route>
        //     <Route path="/:categoryId" element={<Category/>}</Route>
        // </Routes>
    );
}

export default AppRoutes


