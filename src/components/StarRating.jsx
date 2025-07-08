import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ score }) => {
  const rating = score * 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      <div className="flex text-yellow-500">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-lg" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-lg" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-lg" />
        ))}
      </div>
      <span className="ml-1 text-sm text-gray-700 font-avenir-book">
        {rating.toFixed(1)}/5
      </span>
    </div>
  );
};

export default StarRating;
