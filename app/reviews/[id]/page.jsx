"use client";

import { useParams } from "next/navigation"
import { GameDetails } from "@/app/ui/reviews/GameDetails"

export default function Page() {
    const { id } = useParams()

    return (
        <>
            <GameDetails gameId={id} />
        </>
    )
}