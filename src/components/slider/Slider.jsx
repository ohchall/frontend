import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
const Slider = ({ data }) => {
  const slideLeft = () => {
    var SliderPieces = document.getElementById("sliderpiece");
    SliderPieces.scrollLeft = SliderPieces.scrollLeft - 500;
  };
  const slideright = () => {
    var SliderPieces = document.getElementById("sliderpiece");
    SliderPieces.scrollLeft = SliderPieces.scrollLeft + 500;
  };
  return (
    <>
      <SliderSection>
        <SliderPiece id="sliderpiece">
          <div onClick={slideLeft}>left</div>
          <PostWrapper>
            {data.map((post) => (
              <Post key={post.id}>
                <div>{post.image}</div>
                <div>Title: {post.title}</div>
                <div>Content: {post.content}</div>
                <div>Date: {post.date}</div>
              </Post>
            ))}
          </PostWrapper>
          <div onClick={slideright}>right</div>
        </SliderPiece>
      </SliderSection>
    </>
  );
};

export default Slider;
// const SliderSection = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   align-items: center;
//   gap: 10px;
// `;
// const SliderPiece = styled.div`
//   width: 100%;
//   height: 100%;
//   white-space: nowrap;
//   overflow-x: scroll;
//   overflow: scroll;
//   scroll-behavior: smooth;
// `;
// const PostWrapper = styled.section`
//   display: inline-block;
//   gap: 20px;
// `;
// const Post = styled.article`
//   background-color: grey;
//   margin-bottom: 30px;
//   height: 200px;

//   cursor: pointer;
// `;
const SliderSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;
`;

const SliderPiece = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow: scroll;
  scroll-behavior: smooth;
`;

const PostWrapper = styled.section`
  display: inline-block;
  gap: 20px;
`;

const Post = styled.article`
  background-color: grey;
  margin-bottom: 30px;
  height: 200px;
  display: inline-block; // 이 속성을 추가해서 각 요소들이 수평으로 정렬되도록 함
`;
