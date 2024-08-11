import { useEffect, useState } from "react";
import { Actor } from "../@Types/actors";
import { getActorDetails, getActors } from "../services/actors/actors";
import { Cast } from "../@Types/credits";

const useFetchCelebrities = (movieCast?: Cast[]) => {
    const [celebrities, setCelebrities] = useState<Cast[]>([]);
    const [actorsBirthdays, setActorsBirthdays] = useState<string[]>([]);

    const fetchCelebrities = async () => {
      try {
        const actorsResponse = await getActors();
        if(actorsResponse?.status === 200){ 
            setCelebrities(actorsResponse.data.results);
          
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

    const fetchCast = async () => {
        try {
            if (movieCast) {
                setCelebrities(movieCast);
                const detailsPromise = movieCast.map((actor: Cast) => getActorDetails(actor.id));
                const detailsResponse = await Promise.all(detailsPromise);
                const details = detailsResponse.map(response => response.birthday);
                setActorsBirthdays(details);
              }
        } catch (error) {
          console.log(error);
        }
      };
  
    useEffect(() => {
        if(movieCast){
            fetchCast();
        }else{
            fetchCelebrities();
        }
    }, [movieCast]);

    return { celebrities, actorsBirthdays };

};

export default useFetchCelebrities;