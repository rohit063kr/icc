import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Seprator.css";

import Button from "../UI/Button";

const MakeChange = function () {
  return (
    <Fragment>
      <div className="box">
        <Link to="remove-something">
          <Button className="btn">Remove a member or course</Button>
        </Link>
        <Link to="change-details">
          <Button className="btn">Change the details</Button>
        </Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default MakeChange;
