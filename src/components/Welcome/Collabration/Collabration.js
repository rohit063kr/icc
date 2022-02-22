const Collabration = function (props) {
  const data = props.data ? props.data : "";
  return (
    <section className="section section-collabration" id="collabration">
      <div className="container">
        <div className="centered-container">
          <h3 className="heading--secondary feature__main-heading">
            Collabration with
          </h3>
        </div>
        <div className="collabration">
          <img alt="school" src={data?.img1} className="collabration__img" />
          <div className="collabration__text-box">
            <h2 className="collabration__heading">{data?.name}</h2>
            <p className="collabration__text">{data?.about}</p>
          </div>
          <img alt="school" src={data?.img2} className="collabration__img" />
        </div>
      </div>
    </section>
  );
};

export default Collabration;
