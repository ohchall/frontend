import React from 'react'

const CrewCategory = ({ category, customCategory, onSelectCategory, onCustomCategoryChange }) => {

  const selectCategory = (e) => {
    const value = e.target.value;
    if (value) {
      e.target.style.color = "#111111";  
    } else {
      e.target.style.color = "#b7b7b7";  
    }
    onSelectCategory(value);
    if (value !== "custom") {
      onCustomCategoryChange(""); 
    }
  };

  return (
    <div className="category identicalStyle"> 
      <strong>종목</strong>
      <div>
          <select name="exerciseCategory" value={category} onChange={selectCategory}>
            <option value="">운동종류 선택</option>
            <option value="custom">직접입력</option>
            <option>러닝</option>
            <option>자전거</option>
            <option>웨이트</option>
            <option>요가</option>
            <option>산책</option>
            <option>복싱</option>
            <option>필라테스</option>
          </select>
          {category === "custom" && (
            <input 
              type="text" 
              value={customCategory}
              placeholder="원하는 카테고리를 입력해주세요" 
              onChange={(e) => onCustomCategoryChange(e.target.value)} 
            />
          )}
      </div>
    </div>
  )
}

export default CrewCategory;
