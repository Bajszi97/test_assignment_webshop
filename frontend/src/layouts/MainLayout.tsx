import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="flex flex-col w-full">
            <Header/>

            <Outlet />

            <Footer/>
        </div>
    )
}