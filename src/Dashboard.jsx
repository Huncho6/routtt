import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Services from "./pages/services/Service";
import Navbar from "./component/Navbar";
import Students from "./pages/students/Students";
import CarHire from "./pages/services/CarHire";
import CarRepair from "./pages/services/CarRepair";
import StudentPreview from "./pages/students/StudentsPreview";
import Blog from "./pages/blogs/Blog";
import BlogPreview from "./pages/blogs/BlogPreview";
import Mart from "./pages/mart/Mart";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import BlogCard from "./pages/blogs/BlogCard";


const Dashboard = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData);

  if (!userData) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested route */}
        <Route path="/services" element={<Services />}>
          <Route path="car-repair" element={<CarRepair />} />
          <Route path="car-hire" element={<CarHire />} />
        </Route>

        {/* Nested Route */}
        <Route path="/student" element={<Students />} />
        <Route path="/student/:slug" element={<StudentPreview />} />

         <Route path="/blog" element={<Blog />}>
          <Route path="blogcard" element={<BlogCard />} />
        </Route>
         <Route path="/blog/:slug" element={<BlogPreview />} />
        <Route path="/mart" element={<Mart />} />
      </Routes>
    </>
  );
};

export default Dashboard;