import React from "react";
import { CommunityDeleteContainer } from "./CommunityDelete.style";

interface CommunityDeleteProps {
  onClose: () => void;
  onDelete: () => void;
}

const CommunityDelete: React.FC<CommunityDeleteProps> = ({
  onClose,
  onDelete,
}) => {
  return (
    <CommunityDeleteContainer>
      <div className="CommunityDeleteModal">
        <button onClick={onDelete}>삭제</button>
        <button onClick={onClose}>취소</button>
      </div>
    </CommunityDeleteContainer>
  );
};

export default CommunityDelete;
