import { IconStar, RatingWrapper } from "./styles";

interface IBackgroundColorProps {
  backgroundColor: boolean
}

const Rating = ({ backgroundColor }: IBackgroundColorProps) => {
  return (
    <RatingWrapper backgroundColor={backgroundColor}>
        <IconStar src="/icons/star.png" alt="starIcon"/>
        <span> 8.1</span>
    </RatingWrapper>
  )
}

export default Rating;