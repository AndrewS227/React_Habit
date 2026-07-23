import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from "date-fns" // date-fns import!
import { Button2 } from "./Button"

export function HabitList(){
    const habits = [{id: "asd", name: "Hi"}]

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
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date(), {weekStartsOn: 1}),
        end: endOfWeek(new Date(), {weekStartsOn: 1}),
    })

    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
                <span className="font-medium">{habit.name}</span>
                <span className="text-sm text-cyan-400">👻 3</span>
            </div>
            <Button2 variant="ghost-destructive" className="text-sm">
                Delete
            </Button2>
        </div>
        <div className="flex gap-1.5">
            {visibleDates.map(date => (
                <Button2 className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs" key={date.toISOString()} disabled={isFuture(date)}>
                    <span className="font-medium">{format(date, "EEE")}</span>
                    <span>{format(date, "d")}</span>
                </Button2>
            ))}
        </div>
    </div>
}