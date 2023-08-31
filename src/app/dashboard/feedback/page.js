"use client"
import React, { useEffect, useState } from 'react'
import Loading from '../loading';

const FeedbackPage = () => {
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulated 2-second delay
  }, []);
  return (
		<div className="w-10/12 mb-60 ml-auto mr-20 pt-8 mt-20 z-0">
			{isLoading ? (
        <Loading />
      ) : (
        <div>
         Feedback
        </div>
      )}
		</div>
	);
}

export default FeedbackPage