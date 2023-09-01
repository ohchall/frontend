import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getCommunityPost,
  getCommunityComments,
  addCommunityComment,
} from "../../api/mock/CommunityDetailApi";
import {
  MainContent,
  Nickname,
  PostDate,
  Title,
  Content,
  ImageBox,
  CommentSection,
  CommentBox,
  CommentContent,
  CommentInputSection,
  CommentInput,
  SubmitButton,
} from "./CommunityDetail.style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/ConfigStore";

interface Post {
  nickname: string;
  title: string;
  content: string;
  image: string;
  postDate: string;
}

interface Comment {
  postId: string;
  content: string;
  postDate: string;
  nickname: string;
}

function CommunityDetail() {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const userInfo = useSelector((state: RootState) => state.user);

  useEffect(() => {
    getCommunityPost(id).then((data) => {
      setPost(data);
    });
    getCommunityComments(id).then((data) => {
      setComments(data);
    });
  }, [id]);

  const addComment = () => {
    console.log("userInfo:", userInfo);
    const comment: Comment = {
      postId: id!,
      nickname: userInfo.nickname,
      content: newComment,
      postDate: new Date().toISOString().split("T")[0],
    };
    console.log("Adding comment:", comment);
    addCommunityComment(comment).then((data) => {
      console.log("Added comment:", data);
      setComments([...comments, data]);
      setNewComment("");
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const formatDate = (postDate: string) => {
    const now = new Date();
    const detailpostDate = new Date(postDate);
    const diffInSeconds = Math.floor(
      (now.getTime() - detailpostDate.getTime()) / 1000
    );

    if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}분 전`;
    }

    if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    }

    return `${Math.floor(diffInSeconds / 86400)}일 전`;
  };

  if (post === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainContent>
        <div className="MainContentTitle">
          <div className="NickLogo">{post.nickname[0]}</div>
          <div className="NickContent">
            <Nickname>{post.nickname}</Nickname>
            <PostDate>{formatDate(post.postDate)}</PostDate>
          </div>
          <div className="MainContentUpdate">...</div>
        </div>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
        <ImageBox>
          <img
            src={post.image}
            alt="Main"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </ImageBox>
      </MainContent>

      <CommentSection>
        {comments.map((comment, index) => (
          <CommentBox key={index}>
            <div className="CommentContentTitle">
              <div className="CommentLogo">{comment.nickname[0]}</div>
              <div className="CommentNickContent">
                <Nickname>{comment.nickname}</Nickname>
                <PostDate>{formatDate(comment.postDate)}</PostDate>
              </div>
              <div className="CommentContentUpdate">...</div>
            </div>
            <CommentContent>{comment.content}</CommentContent>
            <div className="CommentUndeline"></div>
          </CommentBox>
        ))}
        <CommentInputSection>
          <CommentInput
            placeholder="함께할 크루들과 즐거운 대화를 나눠보세요."
            value={newComment}
            onChange={handleInputChange}
            maxLength={100}
          />
          <SubmitButton onClick={addComment}>등록</SubmitButton>
        </CommentInputSection>
      </CommentSection>
    </>
  );
}

export default CommunityDetail;
