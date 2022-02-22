import React, { Fragment, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AddNew = React.lazy(() => import("./components/Admin/pages/AddNew"));
const RemoveForm = React.lazy(() =>
  import("./components/Admin/Forms/RemoveForm")
);
const UpdateForm = React.lazy(() =>
  import("./components/Admin/Forms/UpdateForm")
);
const AddCourse = React.lazy(() =>
  import("./components/Admin/Forms/AddCourse")
);
const AddFaculty = React.lazy(() =>
  import("./components/Admin/Forms/AddFaculty")
);
const MakeChange = React.lazy(() =>
  import("./components/Admin/pages/MakeChange")
);
const Welcome = React.lazy(() => import("./components/Welcome/Welcome"));
const Admin = React.lazy(() => import("./components/Admin/Admin"));

const App = function () {
  return (
    <Fragment>
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="update" element={<MakeChange />}>
              <Route path="change-details" element={<UpdateForm />} />
              <Route path="remove-something" element={<RemoveForm />} />
            </Route>

            <Route path="add-new" element={<AddNew />}>
              <Route path="course" element={<AddCourse />} />
              <Route path="faculty" element={<AddFaculty />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
