import React from "react";
import { BannerSection, BannerTitle } from "./Banner.style";
function EventBanner() {
  return (
    <BannerSection>
      {/* {data.map((bannner) => (
                  <div key={bannner.id}>
                    <div>{bannner.image}</div>
                    <div>Title: {bannner.title}</div>
                  </div>
                ))} */}
      <BannerTitle> !!!이벤트 베너!!! </BannerTitle>
    </BannerSection>
  );
}

export default EventBanner;
