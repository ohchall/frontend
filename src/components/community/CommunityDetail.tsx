import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCommunityPost,
  deleteCommunityPost,
  getCommunityComments,
  addCommunityComment,
  deleteCommunityComment,
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
import CommunityDelete from "./CommunityDelete";
import CommunityDeletePost from "./CommunityDeletePost";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/ConfigStore";

interface Post {
  nickname: string;
  title: string;
  content: string;
  images?: string[];
  postDate: string;
}

interface Comment {
  postId: string;
  content: string;
  postDate: string;
  nickname: string;
  socialCommentId: any;
}

function CommunityDetail() {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(
    null
  );

  const { id } = useParams<{ id: string }>();

  const formatCreatedAt = (createdAt: number[]) => {
    const [year, month, day, hour, minute, second] = createdAt;
    return new Date(
      Date.UTC(year, month - 1, day, hour, minute, second)
    ).toISOString();
  };

  useEffect(() => {
    getCommunityPost(id!)
      .then((response: any) => {
        if ("createdAt" in response) {
          response.postDate = formatCreatedAt(response.createdAt);
        }
        setPost(response);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [id]);

  useEffect(() => {
    getCommunityComments(id!)
      .then((response: any[]) => {
        const formattedComments = response.map((comment) => {
          if ("createdAt" in comment) {
            comment.postDate = formatCreatedAt(comment.createdAt);
          }
          return comment;
        });
        setComments(formattedComments);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const navigate = useNavigate();

  const deletePost = () => {
    if (!post) return;
    deleteCommunityPost(id!)
      .then(() => {
        navigate("/community");
      })
      .catch((error) => {
        alert("본인 게시글만 삭제할 수 있습니다.");
      });
  };

  const addComment = () => {
    if (newComment.trim() === "") {
      alert("댓글을 입력하세요.");
      return;
    }

    addCommunityComment(id!, newComment)
      .then((comment: any) => {
        if (
          "content" in comment &&
          "createdAt" in comment &&
          "nickname" in comment
        ) {
          const newCommentObj: Comment = {
            postId: id!,
            content: comment.content,
            postDate: formatCreatedAt(comment.createdAt),
            nickname: comment.nickname,
            socialCommentId: comment.socialCommentId,
          };
          setComments([...comments, newCommentObj]);
        }
        setNewComment("");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const [isModalOpenArray, setIsModalOpenArray] = useState<boolean[]>(
    new Array(comments.length).fill(false)
  );

  const toggleModal = (index: number, commentId: string) => {
    const newIsModalOpenArray = [...isModalOpenArray];
    newIsModalOpenArray[index] = !newIsModalOpenArray[index];
    setIsModalOpenArray(newIsModalOpenArray);
    setSelectedCommentId(commentId);
  };

  useEffect(() => {
    setIsModalOpenArray(new Array(comments.length).fill(false));
  }, [comments]);

  const deleteComment = (socialCommentId: any) => {
    deleteCommunityComment(socialCommentId)
      .then(() => {
        const newComments = comments.filter(
          (comment) => comment.socialCommentId !== socialCommentId
        );
        setComments(newComments);
      })
      .catch((error) => {
        console.error("댓글 삭제 실패:", error);
      });
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
          <div className="NickLogo">{post?.nickname[0]}</div>
          <div className="NickContent">
            <Nickname>{post?.nickname}</Nickname>
            <PostDate>{formatDate(post?.postDate || "")}</PostDate>
          </div>
          <div className="MainContentUpdate" onClick={() => setModalOpen(true)}>
            ...
          </div>
          {isModalOpen && (
            <CommunityDeletePost
              onClose={() => setModalOpen(false)}
              onDelete={deletePost}
            />
          )}
        </div>
        <Title>{post?.title}</Title>
        <Content>{post?.content}</Content>
        <ImageBox>
          <img
            src={
              post?.images && post?.images.length > 0
                ? post?.images[0]
                : "default-image-url-here"
            }
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
              <div
                className="CommentContentUpdate"
                onClick={() => toggleModal(index, comment.postId)}
              >
                ...
              </div>
            </div>
            {isModalOpenArray[index] && (
              <CommunityDelete
                onClose={() =>
                  toggleModal(index, String(comment.socialCommentId))
                }
                onDelete={() => deleteComment(comment.socialCommentId)}
              />
            )}
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
