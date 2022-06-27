import classNames from "classnames";
import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/genereted";
import { Lesson } from "./Lesson";

interface SidebarProps {
    sidebarOpen: boolean,
    closeSidebar: () => void,
}

export function Sidebar(props :SidebarProps) {
    const { data } = useGetLessonsQuery()

    return (
        <aside className={classNames("absolute z-50 right-0 md:static h-full w-full md:w-[21.75rem] md:h-auto bg-gray-700 p-6 border-l border-gray-600 transition duration-500", {
            "-top-full": !props.sidebarOpen,
            "top-0": props.sidebarOpen,
        })}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => (
                    <Lesson 
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                        closeSidebar={props.closeSidebar}
                    />
                ))}
            </div>
        </aside>
    )
}