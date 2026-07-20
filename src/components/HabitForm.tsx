import { Button2 } from "./Button"

export function HabitForm(){
  return (
    <form className="flex gap-2">
    <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-red-500" placeholder="New Habit..." />
    <Button2>Add Habit</Button2>
    </form>
  )
}