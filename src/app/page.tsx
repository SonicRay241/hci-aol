"use client";

import SearchIcon from "@/components/icons/search";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { BellDotIcon, FileClockIcon, HospitalIcon, ScanLineIcon, UserCheck2Icon, UserCheckIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import SearchBar from "@/components/searchbar";

export default function Page() {
  const [loadMain, setLoadMain] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const first = localStorage.getItem("appStarted")

    if (first == "true") setLoadMain(true)
    else router.push("/start")
  }, [])

  if (!loadMain) {
    <></>
  }

  return (
    <main className="pt-6 space-y-3 pb-16">
      <TopBar/>
      <div className="px-6 space-y-3">
        <div className="mt-[30%] mb-6">
          <h1 className="text-foreground/50 text-5xl font-semibold">Hi there,</h1>
          <h1 className="text-5xl font-semibold">How can I help you today?</h1>
        </div>
        <SearchBar
          onClick={() => {
            router.push("/search")
          }}
          readOnly
        />
        <div className="grid grid-cols-2 gap-2">
          <OptionCard
            title="Scan"
            description="Scan your prescription"
            route="/scan"
          >
            <ScanLineIcon className="text-primary size-12 -translate-x-1 stroke-[1.5]" />
          </OptionCard>
          <OptionCard
            title="Check Up"
            description="Simple health check up"
            route="/checkup"
          >
            <UserCheckIcon className="text-primary size-12 stroke-[1.5]" />
          </OptionCard>
          <OptionCard
            title="Hospitals"
            description="List of hospitals nearby"
            route="/hospitals"
          >
            <HospitalIcon className="text-primary size-12 -translate-x-1 stroke-[1.5]" />
          </OptionCard>
          <OptionCard
            title="History"
            description="Your medication history"
            route="/history"
          >
            <FileClockIcon className="text-primary size-12 -translate-x-1 stroke-[1.5]" />
          </OptionCard>
        </div>
      </div>
    </main>
  )
}

function TopBar() {
  return (
    <nav className="flex justify-between pl-6 pr-5">
      <Avatar className="size-11">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full size-10"
      >
        <BellDotIcon className="size-8 stroke-[1.5]"/>
      </Button>
    </nav>
  )
}

function OptionCard(props: {
  title: string,
  description: string,
  children: ReactNode,
  route: string
}) {
  const router = useRouter()

  return (
    <Card className="active:bg-secondary" onClick={() => router.push(props.route)}>
      <CardContent className="space-y-1">
        {props.children}
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-xs">{props.description}</p>
      </CardContent>
    </Card>
  )
}