import Category from "./components/Category";
import GenNews from "./components/GenNews";
import Header from "./components/Header";
import { updatedNews } from "./utils/News";

function App() {
  return (
    <>
      <div className=" mx-auto  min-w-fit">
        <Header />
        <GenNews updatedNews={updatedNews} />
        <Category />
      </div>
    </>
  );
}

export default App;
