import { H4 } from "../../styles.utils/styles"
import { CastWrapper, Span } from "./styles"

interface ICastProps {
    role: string | undefined,
    name: string | undefined
}

const Cast = ({ role, name }: ICastProps) => {
  return (
    <CastWrapper>
    
        <H4> {role} </H4>
        <Span> {name} </Span>
     
    </CastWrapper>
  )
}

export default Cast