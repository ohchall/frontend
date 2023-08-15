import React from "react";
import { CategoryButton, CategoryContainer } from "./Category.style";
function Category() {
  const categories = [
    "전체",
    "러닝",
    "웨이트",
    "자전거",
    "요가",
    "필라테스",
    "크로스핏",
    "골프",
    "테니스",
  ];
  const onClickCategory = (category) => {
    console.log("category: ", category);
  };
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          onClick={() => onClickCategory(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
}

export default Category;
