import useInput from "../../../hooks/use-input";
import useHttp from "../../../hooks/use-http";
import Button from "../UI/Button";

import "./Form.css";

import useUploadFile from "../../../hooks/use-upload-file";

const AddFaculty = function () {
  const {
    enteredInput: enteredName,
    reset: enteredNameReset,
    inputChangeHandler: enteredNameChangeHandler,
  } = useInput();

  const {
    enteredInput: enteredExpertIn,
    reset: enteredExpertInReset,
    inputChangeHandler: enteredExpertInChangeHandler,
  } = useInput();

  const {
    enteredInput: enteredBathHour,
    reset: enteredBathHourReset,
    inputChangeHandler: enteredBathHourChangeHandler,
  } = useInput();

  const {
    enteredInput: enteredScheduled,
    reset: enteredScheduledReset,
    inputChangeHandler: enteredScheduledChangeHandler,
  } = useInput();

  const {
    enteredInput: selectedImg,
    inputChangeHandler: selectedImgChangeHandler,
  } = useInput();

  const { sendHttp } = useHttp();

  const { uploadFile: imgUploadHandler } = useUploadFile();

  const addFacultyHandler = async function (e) {
    e.preventDefault();
    if (
      enteredName.length === 0 &&
      enteredBathHour.length === 0 &&
      enteredExpertIn.length === 0 &&
      enteredScheduled.length === 0 &&
      selectedImg.length === 0
    )
      return;

    const facultyImg = await imgUploadHandler(selectedImg);

    await sendHttp({
      url: "https://innovation-coaching-centre-default-rtdb.firebaseio.com/faculties.json",
      method: "POST",
      body: {
        name: enteredName,
        expertIn: enteredExpertIn,
        batchHour: enteredBathHour,
        scheduled: enteredScheduled,
        img: facultyImg,
      },
    });

    enteredBathHourReset();
    enteredExpertInReset();
    enteredNameReset();
    enteredScheduledReset();
  };

  const fileInputHandler = function (e) {
    selectedImgChangeHandler(e.target.files[0]);
  };

  return (
    <form className="form__field" onSubmit={addFacultyHandler}>
      <h1 className="form__title">New faculty</h1>
      <div className="form__input-container">
        <label htmlFor="NameOfNew" className="form__heading">
          Name of the new member
        </label>
        <input
          className="form__input"
          id="NameOfNew"
          onChange={enteredNameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form__input-container">
        <label htmlFor="picOfNew" className="form__heading">
          Image of the new member
        </label>
        <input
          type="file"
          className="form__input"
          id="picOfNew"
          onChange={fileInputHandler}
        />
      </div>
      <div className="form__input-container">
        <label className="form__heading">Details of the new member</label>
        <ul>
          <li>
            <label className="form__heading" htmlFor="exprt">
              Expert in:
            </label>
            <input
              className="form__input"
              id="exprt"
              onChange={enteredExpertInChangeHandler}
              value={enteredExpertIn}
            />
          </li>
          <li>
            <label className="form__heading" htmlFor="hr">
              Bath hour:
            </label>
            <input
              className="form__input"
              id="hr"
              onChange={enteredBathHourChangeHandler}
              value={enteredBathHour}
            />
          </li>
          <li>
            <label className="form__heading" htmlFor="sc">
              Scheduled:
            </label>
            <input
              className="form__input"
              id="sc"
              onChange={enteredScheduledChangeHandler}
              value={enteredScheduled}
            />
          </li>
        </ul>
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddFaculty;
