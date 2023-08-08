import React from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useCarouselSize from "./useCarouselSize";
import registDragEvent from "./DragEvent";
import { inrange } from "./inRange";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);

  const { ref } = useCarouselSize();
  console.log(transX);
  console.log(currentIndex);
  return (
    <>
      <SliderSection>
        <div
          ref={ref}
          className="flex"
          style={{
            transform: `translateX(${-currentIndex + transX}px)`,
            transition: `transform ${transX ? 300 : 0}ms ease-in-out 0s`,
          }}
          {...registDragEvent({
            onDragChange: (deltaX) => {
              setTransX(inrange(deltaX));
            },
            onDragEnd: (deltaX) => {
              const maxIndex = data.length - 1;

              if (deltaX < -100)
                setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
              if (deltaX > 100)
                setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));

              setTransX(0);
            },
          })}
        >
          <PostWrapper>
            {data.map((post) => (
              <PostArticle key={post.id}>
                <div>{post.image}</div>
                <div>Title: {post.title}</div>
                <div>Content: {post.content}</div>
                <div>Date: {post.date}</div>
              </PostArticle>
            ))}
          </PostWrapper>
        </div>
      </SliderSection>
    </>
  );
};

export default Slider;

const SliderSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;
`;
const PostWrapper = styled.section`
  display: flex;
  gap: 20px;
`;

const PostArticle = styled.article`
  background-color: grey;
  margin-bottom: 30px;
  height: 200px;
  width: 300px;

  display: inline-block;
`;
