import Header from './Header';
import Footer from './Footer';
import { TemplateBlock } from './Template.style';
import { styled } from "styled-components";
import BackgroundDoc from "../layout/BackgroundDoc";
import illustration from "../../assets/OhChalle7.svg";
// import illustration2 from "../../assets/OhChalle4.svg";
function Template({ children, header, footer }) {
  return (
    <>
      <Background>
        <BackgroundDoc />
        <TemplateBlock>
          {header && <Header />}
          {children}
          {footer && <Footer />}
        </TemplateBlock>
      </Background>
    </>
  );
}

export default Template;

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  padding-left: 20%;
  padding-right: 20%;

  background-image: url(${illustration});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  gap: 30px;

  @media screen and (max-width: 1000px) {
    /* background-image: url(${illustration}); */
    display: flex;
    justify-content: center;
  }
`;