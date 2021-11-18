import React, { useEffect, useState } from "react";
import "./View.css";

import Hide from "../../components/Hide/Hide";
import StudentList from "../../components/StudentList/StudentList";
import TeacherList from "../../components/TeacherList/TeacherList";
import DepartmentList from "../../components/DepartmentList/DepartmentList";
import ModuleList from "../../components/ModuleList/ModuleList";
import AuthAdmin from "../../components/AuthAdmin/AuthAdmin";
import AuthIn from "../../components/AuthIn/AuthIn";
import { useUser } from "../../Contexts/AuthContext";

const View = () => {
  const [viewType, setViewType] = useState("student");
  const [viewTypeSet, setViewTypeSet] = useState(false);
  const user = useUser();

  useEffect(() => {
    if (!user || viewTypeSet) return undefined;
    // if (user.type === "admin" || user.type === "teacher") {
    //   viewType !== "departments" && setViewType("department");
    // } else if (user.type === "student") {
    //   viewType !== "modules" && setViewType("module");
    // }
    setViewTypeSet(true);
  }, [user, viewType, viewTypeSet]);

  return (
    <div>
      <div className="viewBtnWrapper">
        <AuthIn userTypes={["admin", "teacher"]}>
          <button
            onClick={() => setViewType("department")}
            className={`${
              viewType === "department" ? "active" : ""
            } btn viewBtn`}
          >
            Departments
          </button>
        </AuthIn>
        <button
          onClick={() => setViewType("module")}
          className={`${viewType === "module" ? "active" : ""} btn viewBtn`}
        >
          Modules
        </button>
        <AuthIn userTypes={["admin", "teacher"]}>
          <button
            onClick={() => setViewType("student")}
            className={`${viewType === "student" ? "active" : ""} btn viewBtn`}
          >
            Students
          </button>
        </AuthIn>
        <AuthAdmin>
          <button
            onClick={() => setViewType("teacher")}
            className={`${viewType === "teacher" ? "active" : ""} btn viewBtn`}
          >
            Teachers
          </button>
        </AuthAdmin>
      </div>
      <Hide show={viewType === ""}>
        <h4>Click to view any of those.</h4>
      </Hide>
      <AuthIn userTypes={["admin", "teacher"]}>
        <Hide show={viewType === "student"} Component={StudentList} />
      </AuthIn>
      <AuthAdmin>
        <Hide show={viewType === "teacher"} Component={TeacherList} />
      </AuthAdmin>
      <Hide show={viewType === "module"} Component={ModuleList} />
      <AuthIn userTypes={["admin", "teacher"]}>
        <Hide show={viewType === "department"} Component={DepartmentList} />
      </AuthIn>
    </div>
  );
};

export default View;
