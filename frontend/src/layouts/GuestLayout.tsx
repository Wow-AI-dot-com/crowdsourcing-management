import {Outlet} from "react-router-dom";
import {useAuth} from "@Providers/AuthProvider";

export default function GuestLayout() {
  const {user} = useAuth();

  if (user) {
    return null;
  }

  return (
    <div className="layout-guest">
      <Outlet/>
    </div>
  );
}