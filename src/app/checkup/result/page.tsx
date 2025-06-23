"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    return (
        <main className="w-full h-dvh pt-18 pb-20">
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
                    <p className="text-xl font-semibold">Check Up Results</p>
                </div>
            </div>
            <div className="px-6 space-y-4 pb-36">
                <Card className="">
                    <CardContent>
                        {/* {getHospitalReferralContent()} */}
                        <h1 className="text-xl font-semibold mb-6 text-primary">Diagnosis Summary</h1>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="rounded-lg border p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-medium">Slight Fever</h3>
                                        <Badge className="bg-green-300 text-green-600 font-semibold">
                                            Low
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Average body temperature of 37.8°C</p>
                                </div>
                                <div className="rounded-lg border p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-medium">Hypertension (Stage 1)</h3>
                                        <Badge className="bg-yellow-300 text-yellow-600 font-semibold">
                                            Moderate
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Blood pressure consistently ranging between 130-139/80-89 mmHg</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="">
                    <CardContent>
                        {/* {getHospitalReferralContent()} */}
                        <h1 className="text-xl font-semibold mb-6 text-primary">Recommended Medications</h1>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="rounded-lg border p-4">
                                    <div className="flex flex-row gap-2">
                                        <div className="space-y-1">
                                            <h2 className="text-lg font-medium">Acetaminophen</h2>
                                            <p className="text-sm"> Used to lower fever and relieve pain.</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <Image src="/image2.png" alt="Meds" width={100} height={80} />
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg border p-4">
                                    <div className="flex flex-row gap-6">
                                        <div className="space-y-1">
                                            <h2 className="text-lg font-medium">Lisinopril</h2>
                                            <p className="text-sm">Used to lower blood pressure (hypertension)</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <Image src="/image1.png" alt="Meds" width={120} height={500} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="fixed w-full bottom-0 p-6 bg-secondary">
                <Button
                    size="lg"
                    className="w-full h-auto text-lg py-3"
                    onClick={() => router.push("/")}
                >
                    <span>Back to Home</span>
                </Button>
            </div>
        </main>
    )
}