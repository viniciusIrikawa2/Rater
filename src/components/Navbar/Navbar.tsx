import { useNavigate } from "react-router-dom";
import FilterBar from "../FilterBar/FilterBar";
import { Header, Logo } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Header>
        <Logo src="/images/rater_logo.png" alt='Rater Logo' onClick={() => navigate('/')}/>
        <FilterBar/>
    </Header>
  )
}

export default Navbar;