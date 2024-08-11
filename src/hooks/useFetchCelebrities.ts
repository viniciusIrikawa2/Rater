import { useEffect, useState } from "react";
import { Actor } from "../@Types/actors";
import { getActorDetails, getActors } from "../services/actors/actors";
import { Cast } from "../@Types/credits";

const useFetchCelebrities = (movieCast?: Cast[]) => {
    const [celebrities, setCelebrities] = useState<Actor[] | Cast[]>([]);
    const [celebritiesBirthdays, setCelebritiesBirthdays] = useState<string[]>([]);

    const fetchCelebritiesOrMovieCast = async () => {
      try {
          const celebrities = movieCast || await getActors();
          setCelebrities(celebrities);

          const detailsPromise = celebrities.map((celebrity: Actor | Cast) => getActorDetails(celebrity.id));
          const detailsResponse = await Promise.all(detailsPromise);
          const details = detailsResponse.map(response => response.birthday);
          setCelebritiesBirthdays(details);
      } catch (error) {
          console.log(error);
      }
  };

  useEffect(() => {
      fetchCelebritiesOrMovieCast();
  }, [movieCast]);

  return { celebrities, celebritiesBirthdays };
};

export default useFetchCelebrities;