import {Route, Routes} from "react-router-dom"
import { DefaultLayout } from "./layout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}