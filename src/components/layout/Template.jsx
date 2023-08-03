import Header from './Header';
import Footer from './Footer';
import { TemplateBlock } from './Template.style';

function Template({ children, header, footer }) {
  return (
    <>
      {header && <Header />}
      <TemplateBlock>{children}</TemplateBlock>
      {footer && <Footer />}
    </>
  )
}

export default Template