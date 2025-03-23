import React, { useState } from "react";
import "./css/ClientReviews.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      username: "John Doe",
      rating: 5,
      message: "Great service! Highly recommended.",
      date: "March 20, 2025",
      reply: "Thank you, John! We appreciate your feedback. 😊",
    },
    {
      id: 2,
      username: "Sarah Smith",
      rating: 4,
      message: "Good quality, but delivery was a bit late.",
      date: "March 18, 2025",
      reply:
        "Thanks for your feedback, Sarah! We’re working on improving our delivery times.",
    },
    {
      id: 3,
      username: "Michael Lee",
      rating: 5,
      message: "Fantastic experience! Will order again.",
      date: "March 15, 2025",
      reply:
        "Glad to hear that, Michael! Looking forward to your next order. 🙌",
    },
    {
      id: 4,
      username: "Emily White",
      rating: 4,
      message: "The design was amazing!",
      date: "March 12, 2025",
      reply: "Thanks, Emily! We're glad you liked it. 😊",
    },
    {
      id: 5,
      username: "Daniel Brown",
      rating: 5,
      message: "Loved the sign! Fast delivery too.",
      date: "March 10, 2025",
      reply: "Happy to hear that, Daniel! 🎉",
    },
    {
      id: 6,
      username: "Anna Green",
      rating: 3,
      message: "Product is good but packaging was not great.",
      date: "March 8, 2025",
      reply: "We apologize, Anna. We’ll improve our packaging!",
    },
    {
      id: 7,
      username: "David Black",
      rating: 5,
      message: "Excellent customer support!",
      date: "March 5, 2025",
      reply: "Thanks, David! We always aim for the best service.",
    },
    {
      id: 8,
      username: "Sophia Adams",
      rating: 4,
      message: "Good, but expected more customization options.",
      date: "March 3, 2025",
      reply: "Noted! We’ll work on offering more customization.",
    },
    {
      id: 9,
      username: "Chris Wilson",
      rating: 5,
      message: "Best signage service I have ever used!",
      date: "March 1, 2025",
      reply: "Thank you, Chris! We appreciate your kind words. 😊",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Calculate indexes
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Pagination functions
  const nextPage = () => {
    if (currentPage < Math.ceil(reviews.length / reviewsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="reviews-container">
      <h2>Client Reviews</h2>

      {currentReviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-header">
            <h4>{review.username}</h4>
            <span className="review-date">{review.date}</span>
          </div>

          <div className="review-rating">{"⭐".repeat(review.rating)}</div>

          <p className="review-message">{review.message}</p>

          {review.reply && (
            <div className="admin-reply">
              <strong>Admin Reply:</strong> {review.reply}
            </div>
          )}
        </div>
      ))}

      {/* Pagination Buttons */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <FaArrowLeft />
        </button>
        <span>
          Page {currentPage} of {Math.ceil(reviews.length / reviewsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(reviews.length / reviewsPerPage)}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ClientReviews;
