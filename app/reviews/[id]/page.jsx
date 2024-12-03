"use client";

import { useState, useEffect, use } from "react";
import { useParams } from "next/navigation"
import { useSession, getSession } from "next-auth/react";
import { GameDetails } from "@/app/ui/reviews/GameDetails"
import { fetchReviews, addReview } from "@/app/lib/actions";
import { get } from "http";

export default function Page() {
    const [game, setGame] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState(""); 

    const { id } = useParams()

    useEffect(() => {
        async function getReviews() {
            const reviews = await fetchReviews(id);
            setReviews(reviews);
        }

        // async function getUserId() {
        //     const session = await getSession();
        //     setUserId(session?.user?.id);
        // }

        if (id) {
            // console.log("User ID: ", userId);
            // getUserId();
            getReviews();
        }
    }, [id])

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        // if (!userId) {
        //     console.error("User is not authenticated");
        //     return;
        // }
        const newReview = await addReview(id, reviewText);
        if (newReview) {
          setReviews([...reviews, newReview]);
          setReviewText("");
        }
    };    

    return (
        <>
            <GameDetails gameId={id} />
            <div className="mt-8 w-full max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
                <form onSubmit={handleReviewSubmit} className="mb-8">
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black"
                        rows="4"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review here..."
                        required
                    />
                    <button type="submit" className="px-4 py-2 bg-primary text-foreground rounded hover:bg-secondary">
                        Submit Review
                    </button>
                </form>

                <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews yet. Be the first to leave a review!</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="mb-4 p-4 border border-gray-300 rounded-md">
                            <p>{review.content}</p>
                            <p className="text-sm text-gray-500">{new Date(review.created_at).toLocaleString()}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}