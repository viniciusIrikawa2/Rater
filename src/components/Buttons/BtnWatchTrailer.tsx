import { Button, IconPlay } from "./styles";

interface ILinkProps{
  url: string,
}

const BtnWatchTrailer = ({ url }: ILinkProps) => {
  return (
    <Button href={url}>
      Assistir ao trailer
      <IconPlay src="/icons/play.png" alt='playIcon'/>
    </Button>
  )
}

export default BtnWatchTrailer;