import React from "react";
import { styled } from "styled-components";

function Rank({ data }) {
  return (
    <>
      <FavPostContainer>
        {data?.data.map((post) => (
          <FavPostArticle key={post.id}>
            <RankNumber>{post.id}</RankNumber>
            <div> {post.title}</div>
            <div> {post.category}</div>
          </FavPostArticle>
        ))}
      </FavPostContainer>
    </>
  );
}

export default Rank;
const RankNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: white;
`;
const FavPostArticle = styled.article`
  display: flex;
  gap: 3%;
  padding: 3% 3%;
  align-items: center;
  background-color: lightgray;
  border-radius: 10px;
  height: 50px;
  margin: 0 3% 0 3%;
`;
const FavPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
