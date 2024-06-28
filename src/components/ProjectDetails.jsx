import { useRef, useState } from "react"

export default function ProjectDetails ({dueDate, desc, title}){

    const taskRef = useRef();
    const [createTask, setCreateTask] = useState([]);
    console.log(taskRef)

    function addTask (){
        setCreateTask([...createTask, taskRef.current.value]);
        taskRef.current.value = "";
    }

    return (
        <main className="w-[70vw] pt-4 bg-gray-200 pl-10 pr-28">
            <section className="flex flex-row items-top justify-between ">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold ">{title}</h1>
                    <p className="text-lg">{dueDate}</p>
                    {/* <p className="text-md">{title}</p> */}
                    <p className="text-md">{desc}</p>
                </div>
                <button className="h-fit">Delete</button>
                
            </section>
            <hr className=" p-[1px] mt-4" />
            <article>
                <div className="w-full  mt-4">
                    <p className="text-lg font-bold mb-2">Tasks</p>
                    <span className="w-full bg-white px-[5px] py-[6px]">
                        <input ref={taskRef} className="w-[60%]  outline-none px-2 mr-2   " type="text" />
                        <button onClick={addTask} className="text-sm font-semibold">Add Task</button>
                    </span>
                </div>
                <div className=" w-full mt-4 bg-gray-100 py-4 px-2">
                  <ul className="task text-sm w-full  ">
                    {createTask.length > 0 && createTask.map((e,i)=> (<li className=" mb-2  flex justify-between">{e} <button>Clear</button></li>))}
                  </ul>
                </div>
            </article>
        </main>
    )
}