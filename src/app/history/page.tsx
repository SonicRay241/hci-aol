"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, ListIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    return (
        <main className="w-full h-dvh">
            <div className="fixed w-full grid grid-cols-3 p-4 bg-secondary">
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
                <div className="flex justify-center items-center">
                    <p className="text-xl font-semibold">History</p>
                </div>
            </div>
            <div className="pt-[4.5rem] h-full overflow-y-auto pb-8">
                <div className="overflow-x-auto">
                    <div className="flex gap-2 items-stretch w-full pl-6">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full size-10"
                        >
                            <ListIcon/>
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full"
                            size="lg"
                        >
                            Prescription Scan
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full"
                            size="lg"
                        >
                            Check Up
                        </Button>
                    </div>
                </div>
                <div className="px-6 space-y-2 mt-4">
                    <h1 className="text-2xl font-semibold text-primary">May 2025</h1>
                    <div className="flex flex-col gap-3"></div>
                    <HistoryCard
                        title="Prescription Scan"
                        description="Scanned Adderall Medicine"
                        datetime={new Date("2025-05-19")}
                    />
                    <HistoryCard
                        title="Prescription Scan"
                        description="Scanned Paracetamol Medicine"
                        datetime={new Date("2025-05-17")}
                    />
                    <HistoryCard
                        title="Check Up"
                        description="Diagnosis: Fever and Anxiety Attack"
                        datetime={new Date("2025-05-10")}
                    />
                    <h1 className="text-2xl font-semibold text-primary mt-8">April 2025</h1>
                    <div className="flex flex-col gap-3"></div>
                    <HistoryCard
                        title="Prescription Scan"
                        description="Scanned Paracetamol Medicine"
                        datetime={new Date("2025-05-10")}
                    />
                    <HistoryCard
                        title="Check Up"
                        description="Diagnosis: Fever with Coughing"
                        datetime={new Date("2025-05-02")}
                    />
                    <HistoryCard
                        title="Prescription Scan"
                        description="Scanned Entresto Medicine"
                        datetime={new Date("2025-04-27")}
                    />
                </div>
            </div>
        </main>
    )
}

function HistoryCard(props: {
    title: string,
    datetime: Date,
    description: string
}) {
    const router = useRouter()

    return (
        <Card className="active:bg-secondary" onClick={() => router.push("/history/record?id=5")}>
            <CardContent className="">
                <div className="flex items-stretch justify-between gap-2">
                    <div className="h-fit space-y-1">
                        <h2 className="text-xl font-semibold">{props.title}</h2>
                        <p className="text-sm">{props.description}</p>
                        <p className="text-sm text-foreground/50">{props.datetime.toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <ChevronRightIcon className="text-primary size-6" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}