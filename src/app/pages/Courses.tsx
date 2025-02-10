/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footerr from "../components/footer";
import HeroCourses from "../components/HeroCourses";
import CoursesCover from "../components/courses";
import { useSearchParams } from "next/navigation";
import HeroCoursesAll from "../components/HeroCoursesAll";

const HomePage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const [courses, setCourses] = useState([]);
  const [baseSubject, setBaseSubject] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<any>();

  const getCourses = async (category: string, text: string = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://backend.codemunsta.co/subjects/base/${category}?Name=${text}`
      );
      const data = await res.json();
      setCourses(data?.data);
      setMeta({
        total_pages: data?.total_pages,
        next: data?.next,
        previous: data?.previous,
        current_page: data?.current_page,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getAllCourses = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://backend.codemunsta.co/subjects/base/`);
      const data = await res.json();
      setCourses(data?.data);
      setMeta({
        total_pages: data?.total_pages,
        next: data?.next,
        previous: data?.previous,
        current_page: data?.current_page,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getBaseSubjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://backend.codemunsta.co/subjects/get_base_subjects/"
      );
      const data = await res.json();

      setBaseSubject(data?.data?.find((item: any) => item.id === category));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses(category);
    getBaseSubjects();
    getAllCourses();
  }, [category]);
  console.log(baseSubject);

  return (
    <div className="bg-[#fff]">
      <NavBar />
      {category ? (
        <HeroCourses
          title={baseSubject?.name}
          description={baseSubject?.description}
          image={baseSubject?.image}
          loading={loading}
        />
      ) : (
        <HeroCoursesAll />
      )}

      <CoursesCover
        courses={courses}
        short_description={baseSubject?.short_description || ""}
        meta={meta}
        loading={loading}
        getCourses={getCourses}
        id={category}
      />
      <Footerr />
    </div>
  );
};

export default HomePage;
