import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Students from "./pages/students/Students";
import ErrorPages from "./pages/ErrorPages";
import CarRepair from "./pages/services/CarRepair";
import CarHire from "./pages/services/CarHire";
import StudentsPreview from "./pages/students/StudentsPreview";
import Blog from "./pages/blogs/Blog";
import BlogCard from "./pages/blogs/BlogCard";
import BlogPreview from "./pages/blogs/BlogPreview";
import Service from "./pages/services/Service";
import ThemeContextProvider from "./context/ThemeContext";
import Mart from "./pages/mart/Mart";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />}>
            <Route path="CarRepair" element={<CarRepair />} />
            <Route path="CarHire" element={<CarHire />} />
          </Route>
          <Route path="/student" element={<Students />}>
            <Route path=":id" element={<StudentsPreview />} />
          </Route>
          <Route path="/blog" element={<Blog />}>
            <Route path="blogcard" element={<BlogCard />} />
          </Route>
          <Route path="/blog/:slug" element={<BlogPreview />} />
          <Route path="/mart" element={<Mart />} />
          <Route path="*" element={<ErrorPages />} />
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
