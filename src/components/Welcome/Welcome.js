import { Fragment, useState, useEffect } from "react";
import useFetchData from "../../hooks/use-fetch";

import "../../assets/sass/main.scss";

import Header from "./Header/Header";
import Courses from "./Courses/Courses";
import Faculties from "./Faculties/Faculties";
import Collabration from "./Collabration/Collabration";
import Founder from "./Founder/Fouder";
import Footer from "./Footer/Footer";
import Animations from "./Animations/Animaitons";

const Welcome = function () {
  const [details, setDetails] = useState();
  const { fetchData } = useFetchData();

  useEffect(() => {
    fetchData(
      "https://innovation-coaching-centre-default-rtdb.firebaseio.com/details.json",
      setDetails
    );
  }, [fetchData]);

  return (
    <Fragment>
      <Header data={details?.coaching} />
      <Courses />
      <Faculties />
      <Collabration data={details?.collabration} />
      <Founder data={details?.founder} />
      <Footer />
      <Animations />
    </Fragment>
  );
};

export default Welcome;
