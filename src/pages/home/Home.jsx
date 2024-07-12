import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="categories" />
          <Widget type="products" />
        </div>
        <div className="charts">
          <Chart type="order" aspect={2 / 1} />
          <Chart type="earning" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
