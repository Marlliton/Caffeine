import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="max-w-7xl w-full h-screen my-0 mx-auto flex flex-col px-8">
      <Header />
      <Outlet />
    </div>
  )
}