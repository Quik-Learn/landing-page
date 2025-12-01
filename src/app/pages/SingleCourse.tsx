"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footerr from "../components/footer";
import Hero from "../components/SingleHero";
import Tutor from "../components/tutor";
import { useParams } from "next/navigation";

const HomePage = () => {
  const { id }: any = useParams();
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState<any>();
  const getSingleCourse = async (id: any) => {
    try {
      setLoading(true);
      const res = await fetch(`https://backend.quiklearn.co.uk/subjects/${id}`);
      const data = await res.json();

      setCourse(data?.data?.subject);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleCourse(id);
  }, [id]);

  return (
    <div className="bg-[#fff]">
      <NavBar />
      <Hero course={course} loading={loading} />
      <Footerr />
    </div>
  );
};

export default HomePage;
