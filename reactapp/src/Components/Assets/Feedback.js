import React, { useState} from "react";
import "./Feedback.css"; 

function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accuracy,setAccuracy] =useState("");
  const [performance,setPerformance] =useState("");
  
  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 
  const handleAccuracyChange = (event) => {
    setAccuracy(event.target.value);
  }
  const handlePerformanceChange = (event) => {
    setPerformance(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Accuracy of Forecasts:",accuracy);
    console.log("Performance:",performance);
    
  };

  return (
    <div className="feedback-container">
    <div className="rectangle84">
    
    </div>
      <div className="feedback-form">
        <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating} onChange={handleRatingChange}>
              <option value={0}>Select a rating</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Average</option>
              <option value={4}>4 - Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="accuracy">Accuracy of Forecasts:</label>
            <select id="accuracy" value={accuracy} onChange={handleAccuracyChange}>
              <option value={0}>Select accuracy</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Average</option>
              <option value={4}>4 - Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          <div>
            <label htmlFor="performance">Performance:</label>
            <select id="performance" value={performance} onChange={handlePerformanceChange}>
              <option value={0}>Select performance</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Average</option>
              <option value={4}>4 - Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          <div>
            <label htmlFor="comment">Comments:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              rows={4}
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;