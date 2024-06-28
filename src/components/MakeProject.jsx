import React, { forwardRef, useRef, useState } from "react";
import TextArea from "./TextArea";
import ProjectDetails from "./ProjectDetails";

const MakeProject =  function MakeProject ({setViewProject}){

    const titleRef = useRef();
    const descRef = useRef();
    const dueDateRef = useRef();
    const [title , setTitle] = useState();
    const [desc, setDesc] = useState();
    const [dueDate, setDueDate] = useState();

    const [ projectData, setProjectData] = useState();
    const [showTodo, setShowToDo] = useState(false)

    function handleSaveClick (){
        setTitle(titleRef.current.value)
        setDesc(descRef.current.value)
        setDueDate(dueDateRef.current.value)
        setShowToDo(true);
    }


    return (
        <>
            {showTodo ? <ProjectDetails title={title} desc={desc} dueDate={dueDate}  /> :<section className="w-[70vw] pt-4 bg-stone-800 pl-10 pr-28">
                <div className=" flex justify-end gap-4 text-lg font-semibold text-white">
                    <button className="bg-stone-800">Cancel</button>
                    <button onClick={handleSaveClick} className="py-[5px] px-4 rounded-md bg-stone-600">Save</button>
                </div>
                <div >
                <p className="text-xl uppercase font-bold text-gray-500">Title</p>
                <input ref={titleRef} className="w-full py-2 px-2 outline-none rounded-md text-base" placeholder="title..." type="text" />
                </div>
                <div className="mt-8">
                <p className="text-xl uppercase font-bold text-gray-500">Description</p>
                <textarea ref={descRef} className="w-full outline-none rounded-md" rows="4" type="text" />
                
                </div>
                <div className="mt-8">
                <p className="text-xl uppercase font-bold text-gray-500">Due Date</p>
                <input ref={dueDateRef} className="w-full py-2 px-2 outline-none rounded-md cursor-pointer" type="date" />
                
                </div>
            </section>}
        </>
    )
};

export default MakeProject;