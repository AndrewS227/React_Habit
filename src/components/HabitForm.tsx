import { useState } from "react"
import { Button2 } from "./Button"

export function HabitForm(){
  // state variable (name), setName var. to update the state
  const [name, setName] = useState("")
  return (
    <form className="flex gap-2">
    <input 
    value={name} // it's an empty string by default (useState(""))
    onChange={e => setName(e.target.value)} // updates state automatically, we can use that as "name" var. anywhere in the code, react reacts to change and reruns all of the code in that state change section
    className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-700" placeholder="New Habit..." />
    <Button2 className="rounded-lg px-4 py-2 font-medium">Add Habit</Button2>
    </form>
  )
}