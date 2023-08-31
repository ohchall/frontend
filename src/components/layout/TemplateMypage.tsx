import Header from "./HeaderMypage";
import Footer from "./Footer";
import { TemplateBlock, Background } from "./TemplateMypage.style";
import BackgroundDoc from "./BackgroundDoc";
// import illustration2 from "../../assets/OhChalle4.svg";
interface TemplateProps {
  children?: React.ReactNode;
  header?: boolean;
  footer?: boolean;
}

function TemplateMypage({
  children,
  header,
  footer,
}: TemplateProps): JSX.Element {
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

export default TemplateMypage;
