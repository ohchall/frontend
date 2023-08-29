import {
  CommentContainer,
  StyledComment,
  CommentHeader,
  CommentModal,
  CommentContent,
  // CommentFooter,
  CommentFormWrapper,
  CommentEditFormWrapper,
  // SubCommentContainer,
  // SubComment,
  // SubCommentHeader,
  // SubCommentContent,
  // StyledAiOutlineHeart,
  StyledFiMoreHorizontal } from './Comment.style';
import {
  getCrewComments,
  addCrewComment,
  deleteCrewComment,
  editCrewComment } from '../../api/CrewApi';
import { 
  useQueryClient,
  useMutation,
  useQuery } from '@tanstack/react-query';
import { 
  useState,
  useRef } from 'react';

function Comment({
  crewRecruitmentId
}) {
  const [content, setContent] = useState('');
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);
  const [isCommentActivate, setCommentActivate] = useState(true);
  const [isEditActivate, setEditActivate] = useState(false);
  const [editCommentId, setEditCommentId] = useState(0);
  const queryClient = useQueryClient();
  const commentModalRef = useRef(null);
  const addMutation = useMutation(addCrewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['crewComments']);
      console.log('Added comment successfully!');
    }
  });
  const deleteMutation = useMutation(deleteCrewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['crewComments']);
      console.log('Deleted comment successfully!');
    }
  });
  const editMutation = useMutation(editCrewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['crewComments']);
      console.log('Edited comment successfully!');
    }
  });

  const openCommentModal = () => {
    setCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };

  const onClickCommentContainer = (e) => {
    if (commentModalRef.current && !commentModalRef.current.contains(e.target)) {
      closeCommentModal();
    }
  };

  const onSubmitCommentForm = (e) => {
    e.preventDefault();

    const newComment = {
      crewRecruitmentId,
      data: {
        content
      }
    }

    addMutation.mutate(newComment);
    setContent('');
  };

  const onSubmitCommentEditForm = (e) => {
    e.preventDefault();

    const editComment = {
      crewRecruitmentId,
      commentId: editCommentId,
      data: {
        content
      }
    }

    editMutation.mutate(editComment);
    setContent('');
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickDeleteComment = (commentId) => {
    deleteMutation.mutate(commentId);
  };

  const onClickEditComment = (commentId) => {
    setEditActivate(true);
    setEditCommentId(commentId);
    setCommentActivate(false);
  };

  const onClickCancelEdit = () => {
    setEditActivate(false);
    setCommentActivate(true);
  }

  const {
    data,
    isLoading,
    error,
  } = useQuery(['crewComments', crewRecruitmentId], () => getCrewComments(crewRecruitmentId));

  // console.log(isEditActivate);
  // console.log('Activate Edit: ', editCommentId);

  return (
    <CommentContainer
      onClick={onClickCommentContainer}
    >
      {isLoading && 'Loading...'}
      {error && 'An error has occured: ' + error.message}
      {data && data?.data.map((comment) => (
      <StyledComment
        key={comment.commentId}
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
            <button
              onClick={openCommentModal}
            >
              <StyledFiMoreHorizontal />
            </button>

            {isCommentModalOpen && (
            <CommentModal
              ref={commentModalRef}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => onClickEditComment(comment.commentId)}
              >
                수정
              </button>
              <button
                onClick={() => onClickDeleteComment(comment.commentId)}
              >
                삭제
              </button>
            </CommentModal>
            )}
          </div>
        </CommentHeader>

        <CommentContent>
          {/* {
            '현재 정원 1명 자리 남았습니다.\n' +
            '혼합 복식에 여1 구합니다. 남자분도 문의주세요.\n' +
            '경기장 이용비용으로 회비 5,000원 있습니다.'
          } */}
          {comment.content}
        </CommentContent>

        {/* <CommentFooter>
          <div>
            <button>
              <StyledAiOutlineHeart />
            </button>
            <span>댓글 2</span>
          </div>
          <button>
            댓글쓰기
          </button>
        </CommentFooter> */}

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
        </SubCommentContainer> */}
      </StyledComment>
      ))}

      {isCommentActivate &&
      <CommentFormWrapper>
        <form onSubmit={onSubmitCommentForm}>
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
      }

      {isEditActivate &&
      <CommentEditFormWrapper>
        <form onSubmit={onSubmitCommentEditForm}>
          <textarea
            value={content}
            onChange={onChangeContent}
          >
          </textarea>

          <div>
            <button>
              수정
            </button>
            <button
              onClick={onClickCancelEdit}
            >
              취소
            </button>
          </div>
        </form>
      </CommentEditFormWrapper>
      }
    </CommentContainer>
  )
};

export default Comment;
