"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()

  return (
    <main className="bg-accent h-dvh w-full">
      {/* <Image src="/start.png" alt="start image" width={200} height={200}/> */}
      <div className="fixed flex flex-col items-center left-0 right-0 bottom-0 h-64 rounded-t-4xl bg-background pt-8 px-8 space-y-4">
        <h1 className="text-2xl font-semibold">Know Your Medications</h1>
        <p>Access reliable information on medications and discover where to purchase them safely.</p>
        <Button
          size="lg"
          className="w-full text-lg py-6 mt-10"
          onClick={() => {
            localStorage.setItem("appStarted", "true")
            router.push("/")
          }}
        >
          <span>Start Now</span>
          <ArrowRight className="size-5 gap-4"/>
        </Button>
      </div>
    </main>
  )
}
