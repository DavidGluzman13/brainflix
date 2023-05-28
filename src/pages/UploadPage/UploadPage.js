import image from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";

function UploadPage() {
  const navigate = useNavigate();

  function alertSubmit(e) {
    e.preventDefault();
    alert("Uploaded");
    navigate("/");
  }

  return (
    <div className="upload-page">
      <h1>Upload Page</h1>
      <div className="content">
        <form onSubmit={alertSubmit}>
          <div className="content__div">
            <div className="content__image-container">
              <h4 className="content__image-container__heading">
                VIDEO THUMBNAIL
              </h4>
              <img
                src={image}
                className="content__image-container__image"
                alt="Bicycle-stear"
              />
            </div>
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
          </div>
          <div className="content__buttons">
            <button className="content__buttons__cancel-button">CANCEL</button>
            <button className="content__buttons__publish-button">
              <img
                className="content__buttons__publish-button__icon"
                src={publish}
                alt="upload-icon"
              />
              <p className="content__buttons__publish-button__text">PUBLISH</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
