import { styled } from "styled-components";
import React from "react";

function Suggest({ data }) {
  return (
    <>
      {data?.data.map((post) => (
        <SugPostArticle key={post.id}>
          <div>Title: {post.title}</div>
          <div>Content: {post.content}</div>
          <div> {post.category}</div>
        </SugPostArticle>
      ))}
    </>
  );
}

export default Suggest;

const SugPostArticle = styled.div`
  width: 100%;
  height: 200px;
  background-color: grey;
`;
