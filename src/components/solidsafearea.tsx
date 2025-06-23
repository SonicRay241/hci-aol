import { ReactNode } from "react"
import { cn } from "../lib/utils"

export default function SolidSafeArea(props:{
    className?: string
    children: ReactNode
}) {
    return (
        <>
        <div className={cn("fixed w-full h-40 z-10 top-0 left-0 bg-secondary -translate-y-40", props.className)} />
        {props.children}
        <div className={cn("fixed w-full h-40 z-10 bottom-0 left-0 bg-secondary translate-y-30", props.className)} />
        </>
    )
}