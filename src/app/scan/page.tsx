"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, FlashlightIcon, ScanIcon, ScanLineIcon } from "lucide-react"
import Image from "next/image"
import Webcam from "react-webcam"
import { useRouter } from "next/navigation"
import { useCallback, useRef } from "react"
import { invoke } from "@tauri-apps/api/core"
import SearchIcon from "@/components/icons/search"

export default function Page() {
    const router = useRouter()
    const webcamRef = useRef<Webcam | null>(null);

    const capture = useCallback(
        () => {
            if (webcamRef.current) {
                // Base64
                const imageSrc = webcamRef.current.getScreenshot();
                setTimeout(() => {
                    router.push("/scan/result")
                }, 1000)
                // invoke("scan_image", { base64: imageSrc })
                //     .then(val => {
                //         const val_string = val as string

                //         if (val_string.includes("Error")) {
                //             // toast.error(val as string)
                //             return
                //         }

                //         const val_parsed = JSON.parse(val_string) as { item_name: string, confidence: number }
                //         // setMedName(val_parsed.item_name)
                //         // setMedConfidence(val_parsed.confidence)
                //         // setRenderCrosshair(false)
                //         // setScanned(true)
                //     })
            }
        },
        [webcamRef]
    );

    return (
        <main className="w-full h-dvh pt-4">
            <div className="flex flex-col justify-between h-full gap-8">
                <div className="grid grid-cols-3 px-4">
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
                        <p className="text-xl font-semibold">Scanner</p>
                    </div>
                </div>
                {/* <div className="flex flex-col justify-between items-stretch px-6 pt-12 h-full"> */}
                <div className="w-full h-full px-6">
                    <div className="relative w-full h-full bg-black rounded-4xl overflow-hidden">
                        <Webcam
                            // className="w-full"
                            className="absolute top-0 left-0 w-auto h-full object-cover"
                            audio={false}
                            ref={webcamRef}
                            videoConstraints={{
                                facingMode: "environment"
                            }}
                            screenshotFormat="image/png"
                            disablePictureInPicture
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
                            <div className="relative w-full aspect-3/1">
                                <div className="absolute top-0 left-4 size-8 border-t-3 border-l-3 border-white rounded-tl-xl"></div>
                                <div className="absolute top-0 right-4 size-8 border-t-3 border-r-3 border-white rounded-tr-xl"></div>
                                <div className="absolute bottom-0 left-4 size-8 border-b-3 border-l-3 border-white rounded-bl-xl"></div>
                                <div className="absolute bottom-0 right-4 size-8 border-b-3 border-r-3 border-white rounded-br-xl"></div>
                                <div className="absolute inset-4 flex items-center justify-center text-gray-700">
                                    {/* <PlusIcon className="text-white size-8" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-40">
                    <div className="h-20 flex items-center justify-center gap-6">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-auto p-4 rounded-full"
                        >
                            <SearchIcon className="stroke-foreground size-8 stroke-2" />
                        </Button>
                        <Button
                            size="icon"
                            className="size-auto p-6 rounded-full"
                            onClick={capture}
                        >
                            <ScanLineIcon className="text-white size-10 stroke-2" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-auto p-4 rounded-full"
                        >
                            <FlashlightIcon className="size-8 stroke-[1.5]" />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}