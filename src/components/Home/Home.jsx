import {Wrapper, Title, Button} from "./Home.styled";


const Welcome = () => {
  return (
    <Wrapper>
      <Title>Car Rental Service</Title>
      <Button to="/catalog">Rent car now</Button>
    </Wrapper>
  );
};

export default Welcome;