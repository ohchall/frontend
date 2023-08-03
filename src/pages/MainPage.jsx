import { styled } from "styled-components";
import { useFetchPosts } from "../api/TodoApi";
import Slider from "../components/slider/Slider";

function MainPage() {
  const { data, isLoading, isError } = useFetchPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

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
        <PostWrapper>
          {/* {data.map((post) => (
            <Post key={post.id}>
              <div>{post.image}</div>
              <div>Title: {post.title}</div>
              <div>Content: {post.content}</div>
              <div>Date: {post.date}</div>
            </Post>
          ))} */}
          <Slider data={data} />
        </PostWrapper>
      </MainPageSection>
    </>
  );
}

export default MainPage;

const MainPageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  & h1 {
    font-size: 20px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MainPageCategory = styled.nav`
  margin: 10px;
  gap: 10px;
  & a {
    margin: 10px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 20px;
  }
`;
const PostWrapper = styled.section`
  gap: 20px;
  /* display: flex; */
  /* grid-template-columns: 1fr 1fr; */
  justify-items: center;
  margin-bottom: 60px;
  @media screen and (max-width: 1000px) {
  }
`;
const Post = styled.article`
  background-color: grey;
  margin-bottom: 30px;
  height: 200px;
  width: 470px;
`;
