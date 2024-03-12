
import {Header,Footer} from "./components";
import { AllRoutes } from "./routes/AllRoutes";

// import {Home} from "./components/Home";
// import { ProductList } from "./components/ProductList";
// import { Contact,ContactIn, ContactEu, ContactUs} from "./components/Contact";
// // import { ContactIn } from "./components/ContactIn";
// import { ProductDetails } from "./components/productDetails";

// import { Admin } from "./components/Admin";
// import { PageNotFound } from "./components/PageNotFound";

import './App.css';

function App() {
  const user=true;
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
