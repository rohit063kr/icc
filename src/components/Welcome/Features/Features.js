import img1 from "../../assets/images/child.jpg";
import img2 from "../../assets/images/skill.jpg";

const Features = function () {
  return (
    <section className="section section-features">
      <div className="container">
        <div className="centered-container">
          <h3 className="heading--secondary feature__main-heading">
            Our features
          </h3>
        </div>
        <div className="feature">
          <div className="feature__text-box">
            <h2 className="heading--tertiary">Curiousity</h2>
            <p className="text--secondary feature__text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical
            </p>
          </div>
          <img src={img1} className="feature__img" />
        </div>

        <div className="feature feature__rev">
          <img src={img2} className="feature__img" />
          <div className="feature__text-box">
            <h2 className="heading--tertiary">Skill india programme</h2>
            <p className="text--secondary feature__text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
