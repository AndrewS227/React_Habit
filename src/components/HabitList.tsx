import { Button2 } from "./Button"

export function HabitList(){
    const habits = [{id: "asd", name: "Hi"},
                    {id: "asdd", name: "Bye"}
    ]

    if (habits.length === 0){
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one above to get started!</p>
    }
    return <div className="flex flex-col gap-3">
        {/* map converts array to jsx which renders out on the page! */}
        {habits.map(habit => (
            <HabitItem key={habit.id} habit={habit}/>
        ))}
    </div>
}

type HabitItemProps = {
    habit: {id: string, name: string}
}

function HabitItem({habit}: HabitItemProps){
    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
                <span className="font-medium">{habit.name}</span>
                <span className="text-sm text-cyan-400">👻 3</span>
            </div>
            <Button2>Delete</Button2>
        </div>
    </div>
}