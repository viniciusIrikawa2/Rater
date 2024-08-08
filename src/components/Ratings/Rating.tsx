import { IconStar, RatingWrapper } from "./styles";

const Rating = () => {
  return (
    <RatingWrapper>
        <IconStar src="/icons/star.png" alt="starIcon"/>
        <span> 8.1</span>
    </RatingWrapper>
  )
}

export default Rating;