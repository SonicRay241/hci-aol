"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    return (
        <main className="w-full h-dvh">
            <div className="grid grid-cols-3 p-4">
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
                    <p className="text-xl font-semibold">Scan Result</p>
                </div>
            </div>
            <div className="px-6 pt-6 space-y-4">
                <h1 className="text-2xl text-primary font-semibold">5/19/2025, 12:45 PM</h1>
                <div className="relative w-full h-56 bg-black rounded-3xl">
                    <Image
                        src="/record.png"
                        alt="Example"
                        fill
                        className="object-contain w-full h-auto min-h-full rounded-3xl"
                    />
                </div>
                <div className="mt-8 space-y-4">
                    <h2 className="text-2xl font-semibold">Scan Result</h2>
                    <Card className="active:bg-secondary" onClick={() => {
                        router.push("/info?medId=Adderall")
                    }}>
                        <CardContent className="">
                            <div className="flex flex-row gap-6">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-semibold">Adderall</h2>
                                    <p className="text-sm">Used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy.</p>
                                </div>
                                <div className="flex justify-center">
                                    <Image src="/image10.png" alt="Meds" width={100} height={80} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}