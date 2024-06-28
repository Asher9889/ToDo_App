import React from "react";
import img from "../assets/no-projects.png"


export default function NoProjectScreen ({setViewProject}){

    function createProject (){
        setViewProject(true);
    }

    return (
        <section className="w-[70vw] pt-4 bg-gray-200 pl-10 pr-28 ">
            <div className=" flex flex-col items-center">
                <img className="w-24" src={img} alt="" />
                <p className="text-2xl font-bold text-stone-800">No Project Selected</p>
                <p className="text-sm font-semibold text-stone-600">Select a project or get stared with a new one</p>
                <button onClick={createProject} className="px-3 py-[5px] text-xl font-semibold bg-stone-900 text-white rounded-md mt-6">+ Create New Project</button>
            </div>
        </section>
    )
}