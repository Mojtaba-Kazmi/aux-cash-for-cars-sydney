import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <div>{children}</div>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
