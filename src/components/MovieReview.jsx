import React from "react";

export default function MovieReview({ reviews }) {
  return (
    <div className="w-full text-white border-4 border-gray-300">
      <ul className="p-10">
        {reviews.results.map((review) => (
          <li key={review.id} className="border-b p-5 last:border-none">
            <h3 className="text-lg font-bold mb-3">{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
