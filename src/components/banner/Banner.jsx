import React from "react";
import { BannerSection, BannerTitle } from "./Banner.style";

function Banner() {
  return (
    <BannerSection>
      {/* {data.map((bannner) => (
              <div key={bannner.id}>
                <div>{bannner.image}</div>
                <div>Title: {bannner.title}</div>
              </div>
            ))} */}
      <BannerTitle>테니스 크루 '텟텟' 열정은 즐거움에서 나옵니다. </BannerTitle>
    </BannerSection>
  );
}

export default Banner;
