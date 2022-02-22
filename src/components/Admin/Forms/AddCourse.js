import useInput from "../../../hooks/use-input";
import useHttp from "../../../hooks/use-http";

import Button from "../UI/Button";

// const formValidReducer = function (state, action) {
//   if (action.title.length < 5)
//     return {
//       isValid: false,
//       errMsg: "Please write valid title",
//       errSite: "title",
//     };

//   if (action.features.split(",").length < 5)
//     return {
//       isValid: false,
//       errMsg: "Please write atleast 5 features to attract more students",
//       errSite: "feature",
//     };

//   if (action.msg === 0)
//     return {
//       isValid: true,
//       errMsg: "Please write valid message",
//       errSite: "msg",
//     };

//   return {
//     isValid: true,
//     errMsg: null,
//     errSite: null,
//   };
// };

const AddCourse = function () {
  // const [formValidState, dispatchFormValidState] = useReducer(
  //   formValidReducer,
  //   {
  //     isValid: false,
  //     errMsg: "Please write valid title",
  //     errSite: "",
  //   }
  // );

  const {
    enteredInput: enteredTitle,
    reset: titleReset,
    inputChangeHandler: titleChangeHandler,
  } = useInput();

  const {
    enteredInput: enteredFeatures,
    reset: featuresReset,
    inputChangeHandler: featureChangeHandler,
  } = useInput();

  const {
    enteredInput: enteredMsg,
    reset: msgReset,
    inputChangeHandler: msgChangeHandler,
  } = useInput();

  const { sendHttp } = useHttp();

  const addCourseHandler = async function (e) {
    e.preventDefault();
    if (
      (enteredTitle.length === 0,
      enteredMsg.length === 0,
      enteredFeatures.length === 0)
    )
      return;

    await sendHttp({
      url: "https://innovation-coaching-centre-default-rtdb.firebaseio.com/courses.json",
      method: "POST",
      body: { title: enteredTitle, features: enteredFeatures, msg: enteredMsg },
    });

    titleReset();
    featuresReset();
    msgReset();
  };

  return (
    <form className={`form__field`} onSubmit={addCourseHandler}>
      <h1 className="form__title">New course</h1>
      <div className="form__input-container">
        <h2 className="form__heading">Title fo the course</h2>
        <input
          className={`form__input`}
          id="NewCourse"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
      </div>
      <div className="form__input-container">
        <h2 className="form__heading">Features of the new course</h2>
        <textarea
          className={`form__input`}
          onChange={featureChangeHandler}
          value={enteredFeatures}
        ></textarea>
      </div>
      <div className="form__input-container">
        <label htmlFor="msg" className="form__heading">
          A message
        </label>
        <input
          id="msg"
          className={`form__input`}
          onChange={msgChangeHandler}
          value={enteredMsg}
          placeholder="E.g. Hurry up! limited seats are available"
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddCourse;
