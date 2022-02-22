import { useEffect } from "react";
import useInput from "../../../hooks/use-input";
import useHttp from "../../../hooks/use-http";
import useUploadFile from "../../../hooks/use-upload-file";

import "./Form.css";

import Button from "../UI/Button";

const UpdateForm = function () {
  const { uploadFile } = useUploadFile();

  // Coaching section
  const {
    enteredInput: enteredAboutInstitution,
    inputChangeHandler: enteredAboutInstitutionChange,
  } = useInput();

  const {
    enteredInput: enteredCoachingName,
    inputChangeHandler: enteredCoachingNameChange,
  } = useInput();

  const { enteredInput: headerImg, inputChangeHandler: headerImgChange } =
    useInput();

  // Collabration section
  const {
    enteredInput: enteredAboutCollabration,
    inputChangeHandler: enteredAboutCollabrationChange,
  } = useInput();

  const {
    enteredInput: enteredCollabrationName,
    inputChangeHandler: enteredCollabrationNameChange,
  } = useInput();

  const {
    enteredInput: collabratedInstitutionImg1,
    inputChangeHandler: collabratedInstitutionImgChange1,
  } = useInput();

  const {
    enteredInput: collabratedInstitutionImg2,
    inputChangeHandler: collabratedInstitutionImgChange2,
  } = useInput();

  // Founder section
  const {
    enteredInput: enteredAboutFounder,
    inputChangeHandler: enteredAboutFounderChange,
  } = useInput();

  const {
    enteredInput: enteredFounderName,
    inputChangeHandler: enteredFounderNameChange,
  } = useInput();

  const { enteredInput: founderImg, inputChangeHandler: founderImgChange } =
    useInput();

  const headerImageChangeHandler = function (e) {
    headerImgChange(e.target.files[0]);
  };
  const collabrationImgChangeHandler1 = function (e) {
    collabratedInstitutionImgChange1(e.target.files[0]);
  };
  const collabrationImgChangeHandler2 = function (e) {
    collabratedInstitutionImgChange2(e.target.files[0]);
  };
  const founderImgChangeHandler = function (e) {
    founderImgChange(e.target.files[0]);
  };

  const { sendHttp } = useHttp();

  const updateFormHandler = async function (e) {
    e.preventDefault();

    const headerImgPath =
      typeof headerImg !== "string" ? await uploadFile(headerImg) : headerImg;

    const founderImgPath =
      typeof founderImg !== "string"
        ? await uploadFile(founderImg)
        : founderImg;

    const collabratedInstitutionImgPath1 =
      typeof collabratedInstitutionImg1 !== "string"
        ? await uploadFile(collabratedInstitutionImg1)
        : collabratedInstitutionImg1;

    const collabratedInstitutionImgPath2 =
      typeof collabratedInstitutionImg2 !== "string"
        ? await uploadFile(collabratedInstitutionImg2)
        : collabratedInstitutionImg2;

    const detailsData = {
      coaching: {
        about: enteredAboutInstitution,
        name: enteredCoachingName,
        img: headerImgPath,
      },
      founder: {
        about: enteredAboutFounder,
        name: enteredFounderName,
        img: founderImgPath,
      },
      collabration: {
        about: enteredAboutCollabration,
        name: enteredCollabrationName,
        img1: collabratedInstitutionImgPath1,
        img2: collabratedInstitutionImgPath2,
      },
    };

    await sendHttp({
      url: "https://innovation-coaching-centre-default-rtdb.firebaseio.com/details.json",
      method: "PUT",
      body: detailsData,
    });
  };

  useEffect(() => {
    const fetchData = async function () {
      const data = await sendHttp({
        url: "https://innovation-coaching-centre-default-rtdb.firebaseio.com/details.json",
      });

      if (!data) return;
      // Collabration section
      enteredAboutCollabrationChange(data.collabration.about);
      enteredCollabrationNameChange(data.collabration.name);
      collabratedInstitutionImgChange1(data.collabration.img1);
      collabratedInstitutionImgChange2(data.collabration.img2);

      // Founder section
      enteredAboutFounderChange(data.founder.about);
      enteredFounderNameChange(data.founder.name);
      founderImgChange(data.founder.img);

      // Coaching section
      enteredAboutInstitutionChange(data.coaching.about);
      enteredCoachingNameChange(data.coaching.name);
      headerImgChange(data.coaching.img);
    };
    fetchData();
  }, [sendHttp]);

  return (
    <form className="form" onSubmit={updateFormHandler}>
      <div className="form__field">
        <h1 className="form__title">Header section</h1>
        <div className="form__input-container">
          <label htmlFor="coachingName" className="form__heading">
            Name of the coaching
          </label>
          <input
            className="form__input"
            id="coachingName"
            onChange={enteredCoachingNameChange}
            value={enteredCoachingName}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="AboutCoaching" className="form__heading">
            About the institution
          </label>
          <textarea
            className="form__input"
            id="AboutCoaching"
            onChange={enteredAboutInstitutionChange}
            value={enteredAboutInstitution}
          />
        </div>
        <div className="form__input-container">
          <label className="form__heading">
            This pic will be on the top of the page:
          </label>
          <input onChange={headerImageChangeHandler} type="file" />
        </div>
      </div>

      <div className="form__field">
        <h1 className="form__title">Founder section</h1>
        <div className="form__input-container">
          <label htmlFor="yourName" className="form__heading">
            Name of founder
          </label>
          <input
            className="form__input"
            id="yourName"
            onChange={enteredFounderNameChange}
            value={enteredFounderName}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="AboutYou" className="form__heading">
            About the founder
          </label>
          <textarea
            className="form__input"
            id="AboutYou"
            onChange={enteredAboutFounderChange}
            value={enteredAboutFounder}
          />
        </div>
        <div className="form__input-container">
          <label className="form__heading">Update your pic here:</label>
          <input onChange={founderImgChangeHandler} type="file" />
        </div>
      </div>

      <div className="form__field">
        <h1 className="form__title">Collabration section</h1>
        <div className="form__input-container">
          <label htmlFor="collabrationName" className="form__heading">
            Name of the school with which you are collabrated
          </label>
          <input
            className="form__input"
            id="collabrationName"
            onChange={enteredCollabrationNameChange}
            value={enteredCollabrationName}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="AboutCollabration" className="form__heading">
            About your collabration with XYZ school
          </label>
          <textarea
            className="form__input"
            id="AboutCollabration"
            onChange={enteredAboutCollabrationChange}
            value={enteredAboutCollabration}
          />
        </div>
        <div className="form__input-container">
          <label className="form__heading">Update the school pic 1:</label>
          <input onChange={collabrationImgChangeHandler1} type="file" />
        </div>
        <div className="form__input-container">
          <label className="form__heading">Update the school pic 2:</label>
          <input onChange={collabrationImgChangeHandler2} type="file" />
        </div>
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
};

export default UpdateForm;
