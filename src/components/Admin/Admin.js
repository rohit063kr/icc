import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Admin.css";
import Header from "./Header/Header";
import Button from "./UI/Button";

const Admin = function () {
  return (
    <div className="admin">
      <Header />
      <div className="admin__routes">
        <div className="admin__links">
          <Link to="update">
            <Button>Update something</Button>
          </Link>

          <Link to="add-new">
            <Button>Add something new</Button>
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
