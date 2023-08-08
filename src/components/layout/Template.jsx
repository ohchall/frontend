import Header from './Header';
import Footer from './Footer';
import { TemplateBlock } from './Template.style';
import { styled } from "styled-components";
import WheatherReportApi from "../WheatherReportApi";
function Template({ children, header, footer }) {
  return (
    <>
      <Background>
        <WheatherReportApi />
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
  background-color: lightblue;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;