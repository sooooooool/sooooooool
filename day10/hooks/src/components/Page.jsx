import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header";
import { ThemeContext } from "../context/ThemeContext";

const Page = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default Page;
