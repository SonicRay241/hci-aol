"use client"

import SearchIcon from "@/components/icons/search"
import SearchBar from "@/components/searchbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftIcon, ClockIcon, FilterIcon, ListIcon, MapPinIcon, PhoneIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const hospitalData = [
    {
        id: 0,
        name: "Siloam Hospital Kebon Jeruk",
        distance: 0.8,
        rating: 4.5,
        address: "Jl. Perjuangan No.Kav.8",
        phone: "(555) 123-4567",
        hours: "24/7",
        emergency: true,
        specialties: ["Cardiology", "Neurology", "Pediatrics", "Radiology"],
        insurance: ["Medicare", "Blue Cross", "Aetna"],
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 1,
        name: "City General Hospital",
        distance: 0.8,
        rating: 4.5,
        address: "123 Main Street, Downtown",
        phone: "(555) 123-4567",
        hours: "24/7",
        emergency: true,
        specialties: ["Cardiology", "Neurology", "Pediatrics"],
        insurance: ["Medicare", "Blue Cross", "Aetna"],
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        name: "Riverside Medical Center",
        distance: 1.2,
        rating: 4.2,
        address: "456 River Road, Westside",
        phone: "(555) 987-6543",
        hours: "24/7",
        emergency: true,
        specialties: ["Orthopedics", "Oncology", "Obstetrics"],
        insurance: ["Medicare", "United Health", "Cigna"],
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 3,
        name: "Parkview Community Hospital",
        distance: 2.5,
        rating: 4.0,
        address: "789 Park Avenue, Eastside",
        phone: "(555) 456-7890",
        hours: "8:00 AM - 8:00 PM",
        emergency: false,
        specialties: ["Family Medicine", "Dermatology", "Psychiatry"],
        insurance: ["Medicare", "Medicaid", "Kaiser"],
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 4,
        name: "Northside Medical Pavilion",
        distance: 3.1,
        rating: 4.7,
        address: "321 North Boulevard, Northside",
        phone: "(555) 789-0123",
        hours: "24/7",
        emergency: true,
        specialties: ["Trauma", "Cardiology", "Neurosurgery"],
        insurance: ["Medicare", "Blue Cross", "Aetna", "Cigna"],
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 5,
        name: "Southside Health Center",
        distance: 3.8,
        rating: 3.9,
        address: "654 South Street, Southside",
        phone: "(555) 321-6547",
        hours: "7:00 AM - 10:00 PM",
        emergency: false,
        specialties: ["Primary Care", "Pediatrics", "Women's Health"],
        insurance: ["Medicare", "Medicaid", "United Health"],
        image: "/placeholder.svg?height=100&width=100",
    },
]

export default function Page() {
    const router = useRouter()

    return (
        <main className="w-full h-dvh">
            <div className="fixed w-full grid grid-cols-5 p-4 bg-secondary z-20">
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
                    <p className="text-xl font-semibold">Hospitals</p>
                </div>
            </div>
            <div className="pt-[4.5rem] h-full overflow-y-auto pb-8">
                <div className="overflow-x-auto">
                    <div className="flex gap-2 items-stretch w-full px-6">
                        <SearchBar placeholder="Search hospitals..." />
                        <Button
                            variant="outline"
                            className="w-12 h-auto rounded-full"
                        >
                            <FilterIcon className="text-primary stroke-[2.5] size-5"/>
                        </Button>
                    </div>
                </div>
                <div className="px-6 space-y-2 mt-4">
                    <div className="flex flex-col gap-3">
                        {hospitalData.map((data) => {
                            return (
                                <HospitalCard
                                    key={data.id}
                                    {...data}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

function HospitalCard(props: {
    name: string,
    address: string,
    phone: string,
    hours: string,
    distance: number,
    rating: number,
    emergency: boolean,
    specialties: string[]
    image?: string
}) {
    const router = useRouter()

    return (
        <Card className="pt-0 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/4 p-4 h-48 flex items-center justify-center bg-gray-50">
                    <Image
                        // src={props.image || "/placeholder.svg"}
                        src={"/hospital.png"}
                        alt={props.name}
                        className="rounded-md object-cover"
                        fill
                    />
                </div>
                <div className="md:w-3/4 mt-4">
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl text-primary">{props.name}</CardTitle>
                                <CardDescription className="flex items-center mt-1">
                                    <MapPinIcon size={14} className="mr-1 text-gray-500" />
                                    {props.address}
                                </CardDescription>
                            </div>
                            <div className="text-sm text-primary flex justify-end min-w-24 pt-1">
                                <p>{props.distance} km away</p>
                            </div>
                            {/* <div className="text-right">
                                <div className="flex items-center text-amber-500 font-medium">
                                    <StarIcon size={16} className="mr-1 fill-amber-500" />
                                    {props.rating}
                                </div>
                            </div> */}
                        </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                            <div className="flex items-center text-sm">
                                <PhoneIcon size={14} className="mr-2 text-gray-500" />
                                {props.phone}
                            </div>
                            <div className="flex items-center text-sm">
                                <ClockIcon size={14} className="mr-2 text-gray-500" />
                                {props.hours}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {props.emergency && <Badge className="bg-red-500 active:bg-red-600">Emergency Services</Badge>}
                            {props.specialties.slice(0, 3).map((specialty) => (
                                <Badge key={specialty} variant="outline">
                                    {specialty}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
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
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}