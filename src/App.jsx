import { Routes, Route } from "react-router-dom";
import ErrorPages from "./pages/ErrorPages";
import Auth from "./pages/auth/Auth";
import Dashboard from "./Dashboard";
import Blog from "./pages/blogs/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="auth/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </>
  );
}

export default App;
