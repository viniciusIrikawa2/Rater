import { Age, Card, Character, H3, TitleWrapper, Wrapper } from "./styles";
import { returnAge } from "../../functions/helpers";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Overlay } from "../../styles.utils/styles";
import { actorImage } from "../../constants";
import useFetchCelebrities from "../../hooks/useFetchCelebrities";
import { Cast } from "../../@Types/credits";
import { Actor } from "../../@Types/actors";
import { useNavigate } from "react-router-dom";
interface MovieCastProps {
  movieCast?: Cast[]
}

const CelebritiesCard = ({ movieCast }: MovieCastProps) => {
  const { celebrities, celebritiesBirthdays } = useFetchCelebrities(movieCast);
  const navigate = useNavigate();

  return (
    <>
      <Swiper slidesPerView={5.5} spaceBetween={10}> 
        {celebrities.map((actor: Cast | Actor, index: number) => (
          <SwiperSlide key={actor.id}>
            <Card imageUrl={`${actorImage}${actor.profile_path}`} onClick={() => navigate(`/actor/${actor.id.toString()}`)}>
              <Wrapper>
                <TitleWrapper>
                  <H3> {actor.name} </H3>
                  <Age> {returnAge(celebritiesBirthdays[index])} </Age>
                </TitleWrapper>
                {movieCast && (
                  <Character> {(actor as Cast)?.character?.split(' / ')[0]} </Character>
                )}
              </Wrapper>
              <Overlay/>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CelebritiesCard;