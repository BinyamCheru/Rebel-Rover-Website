import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Navbar } from "../components";

const AppLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};
export default AppLayout;
