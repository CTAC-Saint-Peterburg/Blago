import AllEvents from "./components/AllEvents";
import CreateEvents from "./components/CreateEvents";
import Footer from "./components/Footer";
import MyEvents from "./components/MyEvents";
import Profile from "./components/Profile";
import styles from "./stylesComponents/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Profile />
      <MyEvents />
      <AllEvents />
      <CreateEvents />
      <Footer />
    </div>
  );
}

export default App;
