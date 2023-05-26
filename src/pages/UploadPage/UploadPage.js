import image from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import upload from "../../assets/icons/upload.svg";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();

  function alertSubmit(e) {
    e.preventDefault();
    alert("Uploaded");
    navigate("/");
  }

  return (
    <>
      <h1>Upload Page</h1>
      <div className="content">
        <div className="content__image-container">
          <h4>VIDEO THUMBNAIL</h4>
          <img
            src={image}
            className="content__image-container__image"
            alt="Bicycle-stear"
          />
        </div>
        <form onSubmit={alertSubmit}>
          <div className="content__form">
            <label className="content__form__label">
              TITLE YOUR VIDEO
              <input
                name="titleYourVideo"
                className="content__form__input"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="content__form__label">
              ADD A VIDEO DESCRIPTION
              <input
                name="describeYourVideo"
                className="content__form__input content__form__input--modifier"
                placeholder="Add a description to your video"
              />
            </label>
          </div>
          <button className="header__searchdiv__button">
            <img
              className="header__searchdiv__button__icon"
              src={upload}
              alt="upload-icon"
            />
            <p className="header__searchdiv__button__text">PUBLISH</p>
          </button>
        </form>
      </div>
    </>
  );
}

export default UploadPage;
