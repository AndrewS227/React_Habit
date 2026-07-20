import { Button2 } from "./Button"
// Custom components are functions!

export function Header(){
  return <header className="flex items-center justify-between">
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl font-bold">Habit Tracker</h1>
      <span className="text-zinc-400 text-sm">1 / 1 done today</span>
    </div>
    <div className="flex flex-col gap-1 items-end">
      <span className="text-zinc-400 text-sm">Apr 6 - Apr 12</span>
      <div className="flex items-center gap-3">
        {/*
        custom comp. w. props

        <Button text="Prev"></Button> text -> props pass along objects
        <Button text="Next"></Button>
        */}
        {/* simpler children version */}
        <Button2>Prev</Button2>
        <Button2>Next</Button2>
      </div>
    </div>
  </header>
}