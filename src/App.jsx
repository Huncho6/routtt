import { Routes, Route } from "react-router-dom";
import ErrorPages from "./pages/ErrorPages";
import Auth from "./pages/auth/Auth";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </>
  );
}

export default App;
