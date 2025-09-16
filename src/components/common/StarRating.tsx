import React from 'react';
import "../../styles/reviews.css";
import { Star } from "lucide-react";

type Props = { value: number; size?: number };

const StarRating = React.memo<Props>(({ value, size = 16 }) => {
  const stars = React.useMemo(() => 
    [1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={size}
        className={i <= value ? "starFilled" : "starEmpty"}
        aria-hidden="true"
      />
    )), [value, size]);

  return (
    <div className="ratingWrapper" data-testid="star-rating" role="img" aria-label={`${value} out of 5 stars`}>
      {stars}
    </div>
  );
});

export default StarRating;