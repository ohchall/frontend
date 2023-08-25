import React from 'react'

type CrewCategoryProps={
  category: string,
  customCategory: string,
  onSelectCategory: (category: string) => void,
  onCustomCategoryChange: (customCategory: string) => void
}
const CrewCategory: React.FC<CrewCategoryProps> = ({ category, customCategory, onSelectCategory, onCustomCategoryChange }) => {

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>)=> {
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
