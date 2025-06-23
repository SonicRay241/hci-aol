"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon, CompassIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    return (
        <main className="w-full h-dvh">
            <div className="fixed -translate-y-16 w-full grid grid-cols-5 p-4 pt-20 bg-secondary z-20">
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
                    <p className="text-xl font-semibold">Hospital Info</p>
                </div>
            </div>
            <div className="pt-20 px-6">
                <div className="relative md:w-1/4 p-4 h-56 flex items-center justify-center bg-gray-50">
                    <Image
                        // src={props.image || "/placeholder.svg"}
                        src={"/hospital.png"}
                        alt={"hospital"}
                        className="rounded-md object-cover"
                        fill
                    />
                </div>
                <h1 className="text-2xl text-primary font-semibold mt-4">Siloam Hospital Kebon Jeruk</h1>
                <div className="flex items-center mt-2 gap-2">
                    <MapPinIcon size={14} className="text-primary" />
                    <p className="">Jl. Perjuangan No.Kav.8 <span className="text-muted-foreground ml-1 text-sm">(0.8km away)</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <PhoneIcon size={14} className="text-primary" />
                    <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                    <ClockIcon size={14} className="text-primary" />
                    <p>24/7</p>
                </div>
                <h1 className="text-2xl font-semibold mt-6 text-primary">Available Services</h1>
                <div className="grid grid-cols-1 gap-3 mt-4 pb-36">
                    <ServiceCard
                        name="Cancer Information Center"
                        hours="11:20 AM - 20:00 PM"
                        days={["Monday", "Tuesday", "Wednesday", "Saturday"]}
                        image="/hospital.png"
                    />
                    <ServiceCard
                        name="Gastro Colonoscopy Care"
                        hours="11:20 AM - 20:00 PM"
                        days={["Monday", "Tuesday", "Wednesday", "Saturday"]}
                        image="/hospital.png"
                    />
                    <ServiceCard
                        name="Breast Cancer Care"
                        hours="11:20 AM - 20:00 PM"
                        days={["Monday", "Tuesday", "Wednesday", "Saturday"]}
                        image="/hospital.png"
                    />
                    <ServiceCard
                        name="Emergency Center"
                        hours="24/7"
                        days={["Everyday"]}
                        image="/hospital.png"
                    />
                </div>
            </div>
            <div className="fixed bottom-0 w-full p-4 grid grid-cols-3 gap-4 bg-background rounded-t-2xl">
                <Button
                    size="lg"
                    className="w-full h-auto text-lg py-3 col-span-2"
                >
                    <span>Directions</span>
                    <CompassIcon className="size-5" />
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-auto text-lg py-3"
                >
                    <span>Chat</span>
                    <MessageCircleIcon className="size-5" />
                </Button>
            </div>
        </main>
    )
}

function ServiceCard(props: {
    name: string,
    // description: string,
    hours: string,
    days: string[],
    image?: string
}) {
    return (
        <Card className="pt-0 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/4 p-4 h-24 flex items-center justify-center bg-gray-50">
                    <Image
                        // src={props.image || "/placeholder.svg"}
                        src={"/hospital.png"}
                        alt={props.name}
                        className="rounded-md object-cover"
                        fill
                    />
                </div>
                <div className="md:w-3/4 mt-4">
                    <CardHeader className="">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-lg text-primary">{props.name}</CardTitle>
                                {/* <CardDescription className="flex items-center mt-1"> */}
                                    {/* <MapPinIcon size={14} className="mr-1 text-gray-500" /> */}
                                    {/* {props.description} */}
                                {/* </CardDescription> */}
                            </div>
                            {/* <div className="text-sm text-primary flex justify-end min-w-24 pt-1">
                                <p>{props.distance} km away</p>
                            </div> */}
                            {/* <div className="text-right">
                                <div className="flex items-center text-amber-500 font-medium">
                                    <StarIcon size={16} className="mr-1 fill-amber-500" />
                                    {props.rating}
                                </div>
                            </div> */}
                        </div>
                    </CardHeader>
                    <CardContent className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <div className="flex items-center text-sm">
                                <ClockIcon size={14} className="mr-2 text-gray-500" />
                                {props.hours}
                            </div>
                            <div className="flex items-center text-sm">
                                <CalendarDaysIcon size={14} className="mr-2 text-gray-500" />
                                {props.days.join(", ")}
                            </div>
                        </div>
                    </CardContent>
                    {/* <CardFooter>
                        <Button asChild>
                            <a href="https://maps.app.goo.gl/fgSpPYmnGH3uY92C6">
                                Get Directions
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            className="ml-2"
                            onClick={() => router.push("/hospitals/info?id=0")}
                        >
                            View Details
                        </Button>
                    </CardFooter> */}
                </div>
            </div>
        </Card>
    )
}