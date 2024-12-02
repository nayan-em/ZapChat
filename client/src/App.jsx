import { Routes, Route, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MailLayout from "./layouts/MailLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MailLayout />}>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
