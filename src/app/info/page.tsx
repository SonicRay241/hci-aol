"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"

export default function Page() {
    const params = useSearchParams()
    const medId = params.get("medId")
    const router = useRouter()

    return (
        <main className="w-full pt-4 space-y-4">
            <div className="fixed pt-4 pb-8 top-0 w-full grid grid-cols-3 px-4 bg-linear-to-b from-background via-background to-background/0 z-50">
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
                    <p className="text-xl font-semibold">{medId}</p>
                </div>
            </div>
            <div className="flex w-full justify-center py-8 drop-shadow-md sticky top-[52px] -z-10">
                <Image className="-z-10" src={"/image10.png"} alt={medId || ""} width={150} height={80} />
            </div>
            <div className="px-6 pt-8 shadow border border-border space-y-2 pb-20 rounded-t-4xl bg-white">
                <h2 className="text-3xl font-semibold">What is <span className="text-primary">Adderall</span>?</h2>
                <h2 className="text-lg font-semibold">Highest Retail Price: $69.99</h2>
                <div className="mt-2">
                    <p>
                        Adderall is a medicine used to treat Attention Deficit Hyperactivity Disorder (ADHD) and narcolepsy. It is a prescription medication and must be prescribed by a doctor.
                    </p>
                    <p>
                        You can also take Adderall for:
                    </p>
                    <ul className="pl-6 list-disc">
                        <li>Improving attention span (in ADHD patients)</li>
                        <li>Reducing impulsive behavior and hyperactivity</li>
                    </ul>
                </div>
                <h2 className="text-xl font-semibold mt-6">Possible <span className="text-primary">Side Effects</span></h2>
                <ul className="pl-6 list-disc">
                    <li>Increased heart rate</li>
                    <li>Elevated blood pressure</li>
                    <li>Insomnia</li>
                    <li>Dry mouth</li>
                    <li>Loss of appetite</li>
                    <li>Anxiety or nervousness</li>
                    <li>Dizziness</li>
                    <li>Potential for dependency or misuse</li>
                </ul>
                <h2 className="text-xl font-semibold mt-6">Where to <span className="text-primary">Buy</span></h2>
                <ul className="pl-6 list-disc">
                    <li>ALPHA Pharmacy, ABC St. 24</li>
                    <li>Farmasix, CBD St. 69</li>
                </ul>
            </div>
        </main>
    )
}