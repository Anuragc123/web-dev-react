import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };
  return (
    <button
      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded-md transition-all"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
