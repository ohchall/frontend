import Header from "./Header";
import Footer from "./Footer";
import { TemplateBlock, Background } from "./Template.style";
import BackgroundDoc from "./BackgroundDoc";
// import illustration2 from "../../assets/OhChalle4.svg";
interface TemplateProps {
  header?: boolean;
  footer?: boolean;
}

function Template({ header, footer }: TemplateProps): JSX.Element {
  return (
    <>
      <Background>
        <BackgroundDoc />
        <TemplateBlock>
          {header && <Header />}

          {footer && <Footer />}
        </TemplateBlock>
      </Background>
    </>
  );
}

export default Template;
