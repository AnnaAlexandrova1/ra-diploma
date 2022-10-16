import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container" >
      <div className="row">
          <div className="col">
          <Banner />
          <Outlet />
        </div>
        </div>
         </main>
      <Footer />
    </>
  );
}
