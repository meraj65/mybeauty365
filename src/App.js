import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Carousel from "./Component/Carousel/Carousel";
import SkinQuiz from "./Component/Skin-Quiz/SkinQuiz";
import Blog from "./Component/TheBlog/TheBlog";
import Category from "./Component/SHOP-BY-CATEGORY/ShopByCategory";
import Parent from "./Component/Parent/Parent";
import Footer from "./Component/Footer/Footer";
import Login from "./Component/User-Form/login";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Parent} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/skinquiz" component={SkinQuiz} />
        <Route path="/blog" component={Blog} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
