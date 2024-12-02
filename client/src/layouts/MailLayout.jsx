import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MailLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MailLayout;
