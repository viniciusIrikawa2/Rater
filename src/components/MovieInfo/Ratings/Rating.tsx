import { IconStar, RatingWrapper } from "./styles";

interface IBackgroundColorProps {
  rating: number | undefined,
  backgroundColor: boolean
}

const Rating = ({ rating, backgroundColor }: IBackgroundColorProps) => {
  return (
    <RatingWrapper backgroundColor={backgroundColor}>
        <IconStar src="/icons/star.png" alt="starIcon"/>
        <span> {rating?.toFixed(1)} </span>
    </RatingWrapper>
  )
}

export default Rating;