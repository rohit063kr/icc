import useManageData from "../../../hooks/use-manageData";

const Faculties = function (props) {
  const { detailsData: faculties } = useManageData(
    "https://innovation-coaching-centre-default-rtdb.firebaseio.com/faculties.json"
  );

  return (
    <section className="section section-faculties" id="faculties">
      <div className="container">
        <div className="centered-container">
          <h3 className="heading--secondary feature__main-heading">
            Our faculties
          </h3>
        </div>
        <div className="faculties">
          {faculties?.map((faculty) => (
            <div
              key={faculty.id}
              className="faculties__card tertiary-btn-parent"
            >
              <img
                src={faculty.img}
                className="faculties__img"
                alt="asutosh sir"
              />
              <div className="centered-container faculties__name">
                {faculty.name}
              </div>
              <ul className="faculties__info-list">
                <li className="faculties__info-list-item">
                  Batch period:{" "}
                  <span className="bold-text">{faculty.batchHour}</span>
                </li>
                <li className="faculties__info-list-item">
                  Expert in:{" "}
                  <span className="bold-text">{faculty.expertIn}</span>
                </li>
                <li className="faculties__info-list-item">
                  Scheduled :{" "}
                  <span className="bold-text">{faculty.scheduled}</span>
                </li>
                <a href="#" className="btn btn--tertiary faculties__btn">
                  Learn more
                </a>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculties;
