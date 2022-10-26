import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const coursesDetails = useLoaderData();
  return (
    <div>
      <h1>{coursesDetails.details}</h1>
    </div>
  );
};

export default CourseDetail;
