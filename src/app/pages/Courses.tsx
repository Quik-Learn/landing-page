"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Footerr from "../components/footer";
import HeroCourses from "../components/HeroCourses";
import CoursesCover from "../components/courses";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  return (
    <div className="bg-[#fff]">
      <NavBar />
      <HeroCourses category={category} />
      <CoursesCover category={category} />
      <Footerr />
    </div>
  );
};

export default HomePage;
