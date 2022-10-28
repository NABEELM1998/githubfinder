import Footer from "./Components/Layout/Footer";
import { Routes,Route } from "react-router-dom";
import NavBar from "./Components/Layout/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./Components/Layout/Alert";
import User from "./Pages/User";
function App() {
  return (
      <GithubProvider>
        <AlertProvider>
        <div className="flex flex-col justify-between h-screen">
          <NavBar/>
          <main className="container mx-auto px-3 pb-12">
            <Alert/>
            <Routes>
              <Route path="/" element = {<Home/>}></Route>
              <Route path ='/about' element={<About/>}/>
              <Route path="/user/:login" element = {<User/>}/>
              <Route path ='/notfound' element={<NotFound/>}/>
              <Route path ='/*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
      </AlertProvider>
      </GithubProvider>
    
  );
}

export default App;
