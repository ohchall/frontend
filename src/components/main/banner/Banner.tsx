import { BannerLabel, BannerSection, BannerTitle } from './Banner.style';

interface IDataProps {
  data?: {
    data: {
      crewList: [
        {
          image: string[];
          title: string;
        }
      ]
    }
  }
};

function Banner(props: IDataProps) {
  // console.log(bannerData);
  return (
    <>
    {props.data && (
    <BannerSection
      style={
        { backgroundImage: `url(${props.data.data.crewList[0].image[0]})`}
      }
    >
      <BannerLabel>Best</BannerLabel>
      <BannerTitle>{props.data.data.crewList[0].title}</BannerTitle>
    </BannerSection>
    )}
    </>
  );
}

export default Banner;
