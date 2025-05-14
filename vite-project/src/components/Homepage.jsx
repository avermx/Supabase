import { useState } from "react";
import { supabase } from "../supabase-client";

const Homepage = () => {
    
    const [newTask, setNewTask] = useState({ title: "", description: "" })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error } = await supabase.from('Todo').insert(newTask).single()
        if (error) {
            console.error("here is error", error)
        }

    }

    return (
        <div className="bg-black text-white h-screen w-full flex justify-center items-center">
            <div className="h-[90vh] w-[40vw]  border-2 border-white flex flex-col gap-4">
                <div className="w-[100%] h-[10%]  flex justify-center items-center text-4xl bg-gray-800 font-bold">
                    <h1>TODA LIST</h1>
                </div>
                <div className="h-[35%] w-[100%]  justify-center flex  justify-center items-center flex-col gap-5 ">
                    <form onSubmit={handleSubmit} action="" className="w-full h-full flex justify-center items-center flex-col gap-2 ">
                        <input type="text" onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))} className="w-[60%]  border p-2 rounded-[4px]" placeholder="Task Title" />
                        <textarea onChange={(e) => setNewTask((prev) => ({ ...prev, description: e.target.value }))} name="" id="" className="border w-[60%] h-[20%] p-2 rounded-[4px]" placeholder="Task Description"></textarea>
                        <button className="bg-white px-2 py-1 rounded-[4px] text-black">Add Task</button>
                    </form>
                </div>
                <div className="h-[40%] w-full flex justify-center items-center">
                    <div className="border h-[90%] w-[80%] justify-center text-center flex items-center flex-col gap-3">
                        <h1 className="font-extrabold">Title</h1>
                        <p className="">Title</p>
                        <div className="flex flex-row gap-2">
                            <button className="bg-white px-2 py-[0.5px] text-black rounded-[4px]">Edit</button>
                            <button className="bg-white px-2 py-[0.5px] text-black rounded-[4px]">Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homepage