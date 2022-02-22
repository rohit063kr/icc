import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Seprator.css";

import Button from "../UI/Button";

const AddNew = function () {
  return (
    <Fragment>
      <div className="box">
        <Link to="course">
          <Button className="btn">Add a new course</Button>
        </Link>
        <Link to="faculty">
          <Button className="btn">Add a new faculty</Button>
        </Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default AddNew;
