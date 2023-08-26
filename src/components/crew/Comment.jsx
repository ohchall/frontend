import {
  CommentContainer,
  StyledComment,
  CommentHeader,
  CommentContent,
  CommentFooter,
  CommentFormWrapper,
  // SubCommentContainer,
  // SubComment,
  // SubCommentHeader,
  // SubCommentContent,
  StyledAiOutlineHeart,
  StyledFiMoreHorizontal } from './Comment.style';
import {
  getCrewComments,
  addCrewComment } from '../../api/CrewApi';
import { 
  useQueryClient,
  useMutation,
  useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function Comment({
  crewRecruitmentId
}) {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const onClickRegisterComment = (e) => {
    e.preventDefault();

    const newComment = {
      crewRecruitmentId,
      data: {
        content
      }
    }

    mutation.mutate(newComment);
    setContent('');
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const { data, isLoading, error } = useQuery(['crewComments'], getCrewComments);
  const mutation = useMutation(addCrewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['crewComments'])
      console.log('Added comment successfully!')
    }
  });

  return (
    <CommentContainer>
      {isLoading && 'Loading...'}
      {error && 'An error has occured: ' + error.message}
      {data && data?.data.map((item, idx) => (
      <StyledComment
        key={idx}
      >
        <CommentHeader>
          <div>
            <span>
              오
            </span>
            <p>오늘만산다</p>
          </div>

          <div>
            <span>8시간전</span>
            <button><StyledFiMoreHorizontal /></button>
          </div>
        </CommentHeader>

        <CommentContent>
          {/* {
            '현재 정원 1명 자리 남았습니다.\n' +
            '혼합 복식에 여1 구합니다. 남자분도 문의주세요.\n' +
            '경기장 이용비용으로 회비 5,000원 있습니다.'
          } */}
          {item.content}
        </CommentContent>

        <CommentFooter>
          <div>
            <button>
              <StyledAiOutlineHeart />
            </button>
            <span>댓글 2</span>
          </div>
          <button>
            댓글쓰기
          </button>
        </CommentFooter>

        {/* <SubCommentContainer>
          <SubComment>
            <SubCommentHeader>
              <div>
                <span>
                  김
                </span>
                <p>김오챌</p>
              </div>

              <div>
                <span>8시간전</span>
                <button>
                  <StyledFiMoreHorizontal />
                </button>
              </div>
            </SubCommentHeader>

            <SubCommentContent>
              아직 자리 남았나요?
            </SubCommentContent>
          </SubComment>

          <SubComment>
            <SubCommentHeader>
              <div>
                <span>
                  오
                </span>
                <p>오늘만산다</p>
              </div>

              <div>
                <span>8시간전</span>
                <button>
                  <StyledFiMoreHorizontal />
                </button>
              </div>
            </SubCommentHeader>

            <SubCommentContent>
              @김오챌 아직 자리 있습니다. DM 드리겠습니다.
            </SubCommentContent>
          </SubComment>
        </SubCommentContainer> */}
      </StyledComment>
      ))}

      <CommentFormWrapper>
        <form onSubmit={onClickRegisterComment}>
          <textarea
            value={content}
            onChange={onChangeContent}
          >
          </textarea>
          <button>
            등록
          </button>
        </form>
      </CommentFormWrapper>
    </CommentContainer>
  )
};

export default Comment;
