import Navbar from "./component/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <p className='home-para'>Welcome to the Home Page</p>
    </div>
  );
}
