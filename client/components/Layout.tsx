import Navbar from "./Navbar"
import Header from "./Header"

const Layout = (props: any) => {
  return (
    <>
      <Header
        title={props.title}
        des={props.des}
        can={props.can}
        image={props.image}
      />
      <header>
        <Navbar />
      </header>
      <main className="max-w-screen-lg mx-auto mt-3 px-2 xs:px-0">
        {props.children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
