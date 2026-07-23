import type {ComponentProps} from "react"

// props for custom use
type ButtonProps = {
    text: string
}

type Variant = "primary" | "secondary" | "ghost-destructive"
// simpler props, children v.
// React automatically handles children props!
type ButtonProps2 = {
    variant?: Variant
    //disabled?: boolean // ? -> optional prop.
    //Listing all needed props. would be cumbersome,
    //Use ComponentProps instead to reach every prop. of an object!
} & ComponentProps<"button">

// props
export function Button(props: ButtonProps){
    return <button>{props.text}</button> // {} for rendering ts code!
}

// children props are always available for any custom component!
export function Button2({variant = "primary", ...props}: ButtonProps2){
    return (
    <button
    {...props}
     className={`${getVariantStyles(variant)} bg-indigo-900 hover:bg-indigo-800 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed`}
    />
    )
}

function getVariantStyles(variant: Variant){
    switch (variant){
        case "primary":
            return "bg-indigo-900 hover:bg-indigo-800"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "ghost-destructive":
            return "bg-zinc-800 hover:bg-red-800 text-red-800 hover:text-red-200"
        default:
            throw new Error(`Invalid variant: ${variant satisfies never}`) // throws error if any variant isn't handled
    }
}