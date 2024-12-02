import { fetchGames } from "@/app/lib/actions";
import { GameCard } from "@/app/ui/reviews/GameCard";

export default async function Page() {
    const games = await fetchGames();

    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-8">Video Games Reviews</h1>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games.results.map((game) => {
                        return <GameCard key={game.id} game={game} />;
                    })}
                </div>
            </div>
        </>
    )
}