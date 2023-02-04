import FormBox from './components/FormBox';
import TryItButton from './components/TryItButton';
import { Container, LearnCode, Wrapper, ContentWrapper } from './style/App.styled'

function App() {
  return (
    <Container>
      {/* Learn Code Content */}
      <LearnCode>
        <ContentWrapper>
          <h1>
            Learn to code by watching others
          </h1>
          <p>
            See how experienced developers solve problems in real-time. 
            Watching scripted tutorials is great, but understanding how developers think is invaluable. 
          </p>
        </ContentWrapper>
      </LearnCode>

      {/* Form Wrapper*/}
      <Wrapper>
        <TryItButton />
        <FormBox />
      </Wrapper>
    </Container>
  );
}

export default App;
