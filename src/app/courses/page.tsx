import type { Metadata } from "next";
import Courses from "../pages/Courses";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Courses",
};
 

export default function CoursesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Courses />
    </Suspense>
  )
}
