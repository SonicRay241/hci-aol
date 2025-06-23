import SearchIcon from "./icons/search";
import { Input } from "./ui/input";
import { MouseEvent } from "react";

export default function SearchBar(props: {
    onClick?: () => void
    readOnly?: boolean
    placeholder?: string
}) {
    function handleClick(event: MouseEvent) {
        if (props.onClick) {
            event.preventDefault()
            props.onClick()
        }
    }
    return (
        <div className="relative w-full" onClick={e => handleClick(e)}>
            <SearchIcon className="absolute left-3.5 top-3 text-primary size-6 stroke-[2.5] stroke-primary" />
            <Input
                type="text"
                className="bg-background rounded-full h-12 shadow pl-11"
                placeholder={props.placeholder || "Search medications..."}
                readOnly={props.readOnly}
            />
        </div>
    )
}