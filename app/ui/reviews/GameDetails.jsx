"use client";

import { useState, useEffect } from "react";
import { fetchGame } from "@/app/lib/actions"

export function GameDetails({ gameId }) {
    const [game, setGame] = useState(null);

    useEffect(() => {
        fetchGame(gameId).then((game) => {
            setGame(game);
        });
    }, [gameId])

    if (!game) {
        return (
          <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
            <h1 className="text-4xl font-bold">Loading...</h1>
          </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">{game.name}</h1>
            <img src={game.background_image} alt={game.name} className="w-96 h-96 object-cover rounded-lg mb-8" />
            <span className="font-bold text-xl mb-4">Rating: {game.rating}</span>
            <div className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: game.description }} />
        </div>
    )
}