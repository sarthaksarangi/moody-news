import Category from "./components/Category";
import GenNews from "./components/GenNews";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className=" mx-auto  min-w-fit">
        <Header />
        <GenNews />
        <Category />
      </div>
    </>
  );
}

export default App;
