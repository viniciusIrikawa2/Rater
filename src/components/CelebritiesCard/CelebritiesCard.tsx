import { useEffect, useState } from "react";
import { Age, Card, H3, TitleWrapper } from "./styles";
import { getActorDetails, getActors } from "../../services/actors/actors";
import { Actor } from "../@Types/actors";

const CelebritiesCard = () => {
  const [actorsList, setActorList] = useState<Actor[]>([]);
  const [actorsBirthdays, setActorsBirthdays] = useState<any[]>([]);


  const fetchActors = async () => {
    try {
      const actorsResponse = await getActors();
      if(actorsResponse?.status === 200){ 
        setActorList(actorsResponse.data.results);
        
        const detailsPromise = actorsResponse.data.results.map((actor: Actor) => 
          getActorDetails(actor.id)
        );
        const detailsResponse = await Promise.all(detailsPromise);
        const details = detailsResponse.map(response => response.birthday);
        setActorsBirthdays(details);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActors();
  }, []);

  return (
    <>
      {actorsList.map((actor: Actor) => (
        <Card key={actor.id}>
            <TitleWrapper>
                <H3> {actor.name} </H3>
                <Age> 59 </Age>
            </TitleWrapper>
        </Card>
      ))}
    </>
  )
}

export default CelebritiesCard;