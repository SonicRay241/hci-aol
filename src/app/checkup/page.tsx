"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const pages = [
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
]

export default function Page() {
    const router = useRouter()
    const [counter, setCounter] = useState(0)

    return (
        <main className="flex flex-col w-full h-dvh justify-center items-center gap-2 px-12">
            <div className="fixed w-full grid grid-cols-5 p-4 top-0 bg-secondary">
                <Button
                    // variant="outline"
                    variant="ghost"
                    size="icon"
                    className="rounded-full z-20"
                    onClick={() => {
                        router.back()
                    }}
                >
                    <ArrowLeftIcon className="size-6 stroke-2 text-primary" />
                </Button>
                <div className="flex justify-center items-center col-span-3">
                    <p className="text-xl font-semibold">Quick Check up</p>
                </div>
            </div>
            {pages[counter]}
            <div className="fixed w-full bottom-0 p-6 bg-secondary">
                {counter < pages.length - 1 ?
                    <Button
                        size="lg"
                        className="w-full h-auto text-lg py-3"
                        onClick={() => setCounter(counter + 1)}
                    >
                        <span>Next</span>
                    </Button>
                    :
                    <Button
                        size="lg"
                        className="w-full h-auto text-lg py-3"
                        onClick={() => router.push("/checkup/result")}
                    >
                        <span>Done</span>
                    </Button>
                }
            </div>
        </main>
    )
}

function Page1() {
    return (
        <>
            <h1 className="text-4xl font-semibold">01</h1>
            <p className="text-lg">Where exactly does it hurt or feel off, and when did it start?</p>
            <Input
                className="bg-background h-12"
                type="text"
                placeholder="Type here..."
            />
        </>
    )
}

function Page2() {
    return (
        <>
            <h1 className="text-4xl font-semibold">02</h1>
            <p className="text-lg">What is your body temperature?</p>
            <Input
                className="bg-background h-12 w-24"
                type="number"
                defaultValue={36.5}
                placeholder="Type here..."
            />
        </>
    )
}

function Page3() {
    const [selected, setSelected] = useState(0)
    const options: string[] = [
        "Today",
        "1-3 days",
        "About a week ago",
        "1-4 weeks ago",
        "More than a month ago"
    ]

    return (
        <>
            <h1 className="text-4xl font-semibold">03</h1>
            <p className="text-lg">When did this issue begin?</p>
            <div className="flex flex-col items-stretch gap-2">
                {options.map((value, idx) => {
                    return (
                        <Card key={idx} onClick={() => {
                            setSelected(idx)
                        }}>
                            <CardContent className="flex justify-between items-center gap-6">
                                <p>{value}</p>
                                <div
                                    className={cn(
                                        "rounded-full border border-border shadow size-6 transition-colors",
                                        idx == selected ? "bg-primary" : "bg-secondary"
                                    )}
                                ></div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

function Page4() {
    const [yes, setYes] = useState(false)

    return (
        <>
            <h1 className="text-4xl font-semibold">04</h1>
            <p className="text-lg">Have you noticed any other symptoms—fever, cough, shortness of breath, nausea, rash, fatigue?</p>
            <div className="flex flex-col items-stretch gap-2 w-full">
                <Card onClick={() => {
                    setYes(true)
                }}>
                    <CardContent className="flex justify-between items-center gap-6">
                        <p>Yes</p>
                        <div
                            className={cn(
                                "rounded-full border border-border shadow size-6 transition-colors",
                                yes ? "bg-primary" : "bg-secondary"
                            )}
                        ></div>
                    </CardContent>
                </Card>
                <Card onClick={() => {
                    setYes(false)
                }}>
                    <CardContent className="flex justify-between items-center gap-6">
                        <p>No</p>
                        <div
                            className={cn(
                                "rounded-full border border-border shadow size-6 transition-colors",
                                !yes ? "bg-primary" : "bg-secondary"
                            )}
                        ></div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}