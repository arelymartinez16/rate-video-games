import Link from "next/link"

export function GameCard({ game }) {
    return (
        <Link href={`/reviews/${game.id}`}>
            <div className='bg-background border border-gray-700 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                <img src={game.background_image} alt={game.name} className='w-full h-40 object-cover object-center' />
                <div className="p-4">
                    <h2 className="font-bold text-xl text-foreground">{game.name}</h2>
                    <p className="text-sm text-gray-400">{game.rating}</p>
                </div>
            </div>
        </Link>
    )
}