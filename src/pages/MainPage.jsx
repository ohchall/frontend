import { styled } from "styled-components";

function MainPage() {
  return (
    <>
      <MainPageSection>
        <MainPageCategory>
          <a>전체</a>
          <a>골프</a>
          <a>축구</a>
          <a>수영</a>
          <a>자전거</a>
          <a>러닝</a>
        </MainPageCategory>
        <h1>크루 POSTs</h1>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </MainPageSection>
    </>
  );
}

export default MainPage;

const MainPageSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 20px;
  }
`;
const MainPageCategory = styled.nav`
  margin: 20px;
  gap: 20px;
  & a {
    margin: 10px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 20px;
  }
`;

const Post = styled.article`
  background-color: grey;
  margin: 30px;
  height: 200px;
  width: 80%;
`;
