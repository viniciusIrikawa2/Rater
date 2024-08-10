import { H4 } from "../../styles.utils/styles"
import { CastWrapper, Span } from "./styles"

interface ICastProps {
    castType: string,
    castName: string
}

const Cast = ({ castType, castName }: ICastProps) => {
  return (
    <CastWrapper>
        <H4> {castType} </H4>
        <Span> {castName} </Span>
    </CastWrapper>
  )
}

export default Cast