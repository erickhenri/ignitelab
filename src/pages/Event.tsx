import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>();
    const [ sidebarOpen, setSidebarOpen ] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className=" flex flex-col min-h-screen">
            <Header 
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                closeSidebar={closeSidebar}
            />
            <main className="flex flex-1 relative">
                {slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="flex-1"></div>
                }
                <Sidebar 
                    sidebarOpen={sidebarOpen}
                    closeSidebar={closeSidebar}
                />
            </main>
        </div>
    )
}