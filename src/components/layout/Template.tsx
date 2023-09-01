import Header from "./Header";
import Footer from "./Footer";
import { TemplateBlock, Background } from "./Template.style";
import BackgroundDoc from "./BackgroundDoc";
import {
  useLocation,
  useMatch } from "react-router-dom";

interface TemplateProps {
  children?: React.ReactNode;
  header?: boolean;
  footer?: boolean;
}

function Template({
  children,
  header,
  footer
}: TemplateProps): JSX.Element {
  const location = useLocation();
  const matchCrewDetail = useMatch("/crew/:id");
  const matchCrewMember = useMatch("/crew/member/:id");
  const matchCommunityDetail = useMatch("/community/:id");
  let headerText = "";

  if (location.pathname === "/crew") {
    headerText = "참여하고 싶은 크루 둘러보기";
  } else if (location.pathname === "/crew/write") {
    headerText = "크루 모집 포스팅";
  } else if (matchCrewDetail && matchCrewDetail.params.id !== "write") {
    headerText = "크루 상세정보";
  } else if (matchCrewMember) {
    headerText = "크루 멤버 리스트";
  } else if (location.pathname === "/search") {
    headerText = "크루 검색하기";
  } else if (location.pathname === "/mypage") {
    headerText = "마이페이지";
  } else if (location.pathname === "/mypage/todolist") {
    headerText = "마이페이지 / 투두 리스트";
  } else if (location.pathname === "/temp/community") {
    headerText = "오운완";
  } else if (location.pathname === "/community") {
    headerText = "오운완";
  } else if (matchCommunityDetail) {
    headerText = "오운완";
  } else if (location.pathname === "/scrap") {
    headerText = "크루 스크랩 리스트";
  }
    
  return (
    <>
      <Background>
        <BackgroundDoc />
        <TemplateBlock>
          {header && <Header headerText={headerText}/>}
          {children}
          {footer && <Footer />}
        </TemplateBlock>
      </Background>
    </>
  );
}

export default Template;
