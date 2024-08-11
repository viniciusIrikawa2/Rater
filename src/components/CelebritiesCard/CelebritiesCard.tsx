import { Age, Card, H3, TitleWrapper } from "./styles";
import { returnAge } from "../../functions/helpers";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Overlay } from "../../styles.utils/styles";
import { actorImage } from "../../constants";
import useFetchCelebrities from "../../hooks/useFetchCelebrities";
import { Cast } from "../../@Types/credits";
interface MovieCastProps {
  movieCast?: Cast[]
}

const CelebritiesCard = ({ movieCast }: MovieCastProps) => {
  const { celebrities, actorsBirthdays } = useFetchCelebrities(movieCast);
  
  return (
    <>
      <Swiper slidesPerView={5.5} spaceBetween={10}> 
        {celebrities.map((actor: Cast, index: number) => (
          <SwiperSlide key={actor.id}>
            <Card imageUrl={`${actorImage}${actor.profile_path}`}>
                <TitleWrapper>
                    <H3> {actor.name} </H3>
                    <Age> {returnAge(actorsBirthdays[index])} </Age>
                </TitleWrapper>
                <Overlay/>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CelebritiesCard;