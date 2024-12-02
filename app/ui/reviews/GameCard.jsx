export function GameCard({ game }) {
    return (
        <div className='bg-background shadow-md rounded-lg overflow-hidden'>
            {/* <img src={game.background_image} alt={game.name} className='w-full h-40 object-cover object-center' />
            <div className='p-4'>
                <h2 className='font-bold text-xl text-foreground'>{game.name}</h2>
                <p className='text-sm text-gray-400'>{game.rating}</p>
            </div>
            <div className='bg-gray-800 flex justify-between p-4'>
                <span className='font-bold text-xl text-foreground'>${game.price}</span>
                <button className='bg-primary text-foreground px-4 py-2 rounded-md hover:bg-secondary'>Add to Cart</button>
            </div> */}
            <img src={game.background_image} alt={game.name} className='w-full h-40 object-cover object-center' />
            <div className="p-4">
                <h2 className="font-bold text-xl text-foreground">{game.name}</h2>
                <p className="text-sm text-gray-400">{game.rating}</p>
            </div>
        </div>
    )
}