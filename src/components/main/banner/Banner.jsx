import React from "react";
import { BannerLabel, BannerSection, BannerTitle } from "./Banner.style";

function Banner(bannerData) {
  // console.log(bannerData);
  return (
    <BannerSection
      style={{ backgroundImage: `url(${bannerData.data.image[0]})` }}
    >
      <BannerLabel>Best</BannerLabel>
      <BannerTitle>{bannerData.data.title}</BannerTitle>
    </BannerSection>
  );
}

export default Banner;
