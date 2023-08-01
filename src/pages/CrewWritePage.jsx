import React, { useState } from "react";
import CrewWrite from "../style/CrewWrite";
import axios from "axios";

function CrewWritePage() {
  const [addImg, setAddImg] = useState("");
  const [image, setImage] = useState("");

  const upLoadImgHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setAddImg(imageDataUrl);
      setImage(file);
    };
    reader.readAsDataURL(file);
  };

  const onCrewUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("hashTag", e.target.hashTag.value);
    const response = await axios.post("localhost:3000/api/crew", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = await response.data;
    console.log(data);
  };
  return (
    <CrewWrite>
      <div className="header">
        <div className="logos">
          <div className="circle"></div>
          <div className="logoName">My Website</div>
        </div>
        <div className="crewMagnifier">
          <input type="text" placeholder="Search in site" />
          <button>돋보기</button>
        </div>
      </div>
      <section className="crewUpload">
        <form className="crewForm" onSubmit={onCrewUpload}>
          <div className="crewName">
            <strong>Name</strong>
            <input type="text" name="name" />
          </div>
          <div className="crewEmail">
            <strong>Email</strong>
            <input type="text" name="email" />
          </div>
          <div className="crewImage">
            <strong>Image File</strong>
            <div className="button">
              {!addImg && (
                <label className="inputFileBtn" htmlFor="inputFile">
                  컴퓨터에서 선택
                </label>
              )}
              <input
                type="file"
                id="inputFile"
                accept="image/jpeg,image/jpg,image/png"
                onChange={upLoadImgHandler}
              />
            </div>
            {addImg && (
              <div className="imageUploadSize">
                <img src={addImg} alt="" />
              </div>
            )}
          </div>
          <div className="hashTag">
            <strong>해시태크</strong>
            <input type="text" name="hashTag" />
          </div>
          <div className="button">
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
    </CrewWrite>
  );
}

export default CrewWritePage;
