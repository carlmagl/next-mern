import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
