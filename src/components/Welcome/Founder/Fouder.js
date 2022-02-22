const Founder = function (props) {
  const data = props.data ? props.data : "";

  return (
    <section className="section section-founder" id="founder">
      <div className="container">
        <div className="centered-container">
          <h2 className="heading--secondary founder__main-heading">
            ICC Founder
          </h2>
        </div>
        <div className="founder">
          <img src={data.img} className="founder__image" />
          <h4 className="founder__name">{data?.name}</h4>
          <p className="founder__about">{data?.about}</p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
