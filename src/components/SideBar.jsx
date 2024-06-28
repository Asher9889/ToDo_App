import React, { useState } from "react";
import MakeProject from "./MakeProject";

export default function SideBar ({setViewProject, viewProject}){
 
    function addProject (){
        if(viewProject){
            setViewProject(false)
        }else{
            setViewProject(true)
        }
    }
    return (
        
        <>
            <aside className="w-[30vw] pt-4  pl-10 pr-10 text-gray-100 h-screen bg-stone-900 flex flex-col">
                <h3 className="w-fit mb-5 text-2xl font-bold ">Your Projects</h3>
                <button onClick={addProject} className="w-fit mb-5 px-4 py-2 rounded-md hover:bg-black bg-stone-800 font-semibold text-lg "> + Add Projects</button>

                <ul>

                    <li className="text-left pl-[5px] text-md cursor-pointer hover:bg-red-500 mb-[5px]">Learning React</li>
                    <li className="text-left pl-[5px] text-md cursor-pointer  hover:bg-red-500 mb-[5px]">Mastering React</li>
            
                </ul>
            </aside>
        </>
    )
}