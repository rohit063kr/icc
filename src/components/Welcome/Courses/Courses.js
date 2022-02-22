import useManageData from "../../../hooks/use-manageData";

const Courses = function () {
  const { detailsData: courses } = useManageData(
    "https://innovation-coaching-centre-default-rtdb.firebaseio.com/courses.json"
  );

  return (
    <section className="section section-courses" id="classes">
      <div className="container">
        <div className="course">
          {courses?.map((course) => (
            <div key={course.id} className="course__card tertiary-btn-parent">
              <h2 className="course__heading">{course.title}</h2>
              <ul className="course__features">
                {course.features.split(",").map((feature) => (
                  <li key={Math.random()} className="course__feature">
                    <span className="course__list-style">
                      <ion-icon name="checkmark-circle-outline" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="course__hurry">{course.msg}</p>
              <a href="/" className="btn btn--tertiary">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
