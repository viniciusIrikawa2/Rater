import { H2 } from "./styles";

interface TextProps {
    text: string,
}

const SectionTitle = ({ text }: TextProps) => {
  return (
    <H2> {text} </H2>
  )
}

export default SectionTitle;