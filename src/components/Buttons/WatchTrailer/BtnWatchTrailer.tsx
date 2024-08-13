import { useNavigate } from "react-router-dom";
import { Button, IconPlay } from "./styles";

interface ILinkProps{
  url: string,
}

const BtnWatchTrailer = ({ url }: ILinkProps) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(`${url}`)}>
      Assistir ao trailer
      <IconPlay src="/icons/play.png" alt='playIcon'/>
    </Button>
  )
}

export default BtnWatchTrailer;