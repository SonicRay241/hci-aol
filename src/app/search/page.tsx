"use client";

import SearchBar from "@/components/searchbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Page() {
    const router = useRouter()

    return (
        <main className="w-full px-4 pt-4 space-y-4">
            <div className="grid grid-cols-3">
                <Button
                    // variant="outline"
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => {
                        router.back()
                    }}
                >
                    <ArrowLeftIcon className="size-6 stroke-2 text-primary" />
                </Button>
                <div className="flex justify-center items-center">
                    <p className="text-lg font-semibold">Search</p>
                </div>
            </div>
            <SearchBar />
            <div className="grid grid-cols-2 gap-2">
                <MedCard
                    title="Adderall"
                    description="Used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy."
                    image="/image9.png"
                    height={80}
                />
                <MedCard
                    title="Cymbalta"
                    description="Selective serotonin and norepinephrine reuptake inhibitor antidepressant SSNRI."
                    image="/image12.png"
                    width={140}
                    height={140}
                />
                <MedCard
                    title="Entresto"
                    description="Oral combination prescription heart medication that lowers blood pressure."
                    image="/image14.png"
                    width={110}
                    height={140}
                />
                <MedCard
                    title="Blirinta"
                    description="Prevents platelets in your blood from sticking together to form an unwanted blood clot that could ..."
                    image="/image26.png"
                    width={68}
                    height={140}
                />
            </div>
        </main>
    )
}

function MedCard(props: {
    title: string,
    description: string,
    image: string,
    width?: number,
    height?: number
}) {
    const router = useRouter()

    return (
        <Card className="py-4 active:bg-secondary" onClick={() => {
            router.push("/info?medId=Adderall")
        }}>
            <CardContent className="px-4 flex gap-2 h-full">
                <div className="flex flex-col justify-between">
                    <div className="flex justify-center mb-4">
                        <Image src={props.image} alt={props.title} width={props.width || 80} height={props.height || 80} />
                    </div>
                    <div className="">
                        <h2 className="text-xl font-semibold">{props.title}</h2>
                        <p className="text-xs">{props.description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}