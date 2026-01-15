import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hearder from "./components/Header/Hearder";
import NavBar from "./components/nav/NavBar";
import Rooms from "./components/rooms/Rooms";
import About from "./components/About/About";
import Activity from "./components/Activity/Activity";
import Book from "./components/Book/Book";




function App() {
  return (
    <div >

<NavBar/>
<Hearder/>
<About/>
<Rooms/>
<Book/>

<Activity/>
<Contact/>
<Footer/>


    </div>
   
  );
}

export default App;
