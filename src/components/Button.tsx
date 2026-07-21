import type { ReactNode } from "react"

// props for custom use
type ButtonProps = {
    text: string
}

// simpler props, children v.
// React automatically handles children props!
type ButtonProps2 = {
    children: ReactNode
}

// props
export function Button(props: ButtonProps){
    return <button>{props.text}</button> // {} for rendering ts code!
}

// children props are always available for any custom component!
export function Button2({children}: ButtonProps2){
    return <button className="bg-indigo-900 hover:bg-indigo-800 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">{children}</button>
}