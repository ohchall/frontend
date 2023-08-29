import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  getCommunityPost,
  getCommunityComments,
  addCommunityComment,
  deleteCommunityComment,
} from "../../api/mock/CommunityApi";

function CommunityDetail() {
  const { id } = useParams(); // 추가된 부분
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    getCommunityPost(id).then((data) => {
      // 수정된 부분
      setPost(data);
    });

    getCommunityComments(id).then((data) => {
      // 수정된 부분
      setComments(data);
    });
  }, [id]); // 수정된 부분

  const addComment = () => {
    const comment = {
      postId: id, // 수정된 부분
      content: newComment,
      postdate: new Date().toISOString().split("T")[0],
    };
    addCommunityComment(comment).then((data) => {
      setComments([...comments, data]);
      setNewComment("");
    });
  };

  const deleteComment = (commentId) => {
    deleteCommunityComment(commentId).then(() => {
      setComments(comments.filter((comment) => comment.id !== commentId));
    });
  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  if (post === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainContent>
        <Nickname>{post.nickname}</Nickname>
        <PostDate>{post.postdate}</PostDate>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
        <ImageBox>
          <img
            src={post.imageUrl}
            alt="Main"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </ImageBox>
      </MainContent>

      <CommentSection>
        <h2>댓글</h2>
        {comments.map((comment, index) => (
          <CommentBox key={index}>
            <CommentHeader>
              <span>{comment.nickname}</span>
              <span>{comment.postdate}</span>
            </CommentHeader>
            <CommentContent>
              {comment.content}
              <button onClick={() => deleteComment(index)}>삭제</button>
            </CommentContent>
          </CommentBox>
        ))}
        <CommentInputSection>
          <CommentInput
            type="text"
            placeholder="새 댓글을 입력하세요."
            value={newComment}
            onChange={handleInputChange}
          />
          <SubmitButton onClick={addComment}>작성</SubmitButton>
        </CommentInputSection>
      </CommentSection>
    </>
  );
}

export default CommunityDetail;

const MainContent = styled.div`
  padding: 20px;
`;

const Nickname = styled.div`
  font-weight: bold;
`;

const PostDate = styled.div`
  font-size: 0.8em;
  color: gray;
`;

const Title = styled.h1`
  margin-top: 10px;
`;

const Content = styled.p`
  margin-top: 20px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const CommentSection = styled.div`
  margin-top: 30px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  margin-top: 10px;
  padding: 10px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
`;

const CommentContent = styled.div`
  margin-top: 5px;
`;

const CommentInputSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px; // 둥글게 처리
  margin-top: 20px;
  padding: 10px;
`;

const CommentInput = styled.textarea`
  flex-grow: 1;
  border: none;
  outline: none;
  resize: none; // textarea 크기 고정
`;

const SubmitButton = styled.button`
  align-self: flex-end; // 오른쪽 하단에 위치
  background-color: #ddd;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-top: 10px; // 위쪽 마진 추가
  border-radius: 5px; // 버튼도 둥글게
`;
