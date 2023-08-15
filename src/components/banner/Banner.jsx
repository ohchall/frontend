import React from "react";
import { BannerLabel, BannerSection, BannerTitle } from "./Banner.style";

function Banner(bannerData) {
  return (
    <BannerSection style={{ backgroundImage: `url(${bannerData.data.image})` }}>
      <BannerLabel>Best</BannerLabel>
      <BannerTitle>{bannerData.data.title}</BannerTitle>
    </BannerSection>
  );
}

export default Banner;
