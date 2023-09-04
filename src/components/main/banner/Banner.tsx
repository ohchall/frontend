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
  // console.log(props);

  // image가 있는 포스트만 필터링
  const postsWithImage = props.data?.data.crewList.filter(
    (post) => post.image && post.image.length > 0
  );

  // 첫 번째 이미지가 있는 포스트를 선택
  const firstPostWithImage = postsWithImage && postsWithImage[0];

  return (
    <>
      {firstPostWithImage && (
        <BannerSection
          style={{ backgroundImage: `url(${firstPostWithImage.image[0]})` }}
        >
          <BannerLabel>Best</BannerLabel>
          <BannerTitle>
            {firstPostWithImage.title.length > 13
              ? firstPostWithImage.title.substring(0, 12)
              : firstPostWithImage.title}
          </BannerTitle>
        </BannerSection>
      )}
    </>
  );
}

export default Banner;
