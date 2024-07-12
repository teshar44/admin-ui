import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from "../../components/mydatatable/MyDatatable";
import List from "../list/List";
import { userColumns, productColumns, categoryColumns } from "../../datatablesource";
import Datatable from "../../components/datatable/Datatable";

const MyList = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="categories" />
          <Widget type="products" />
        </div>
        <Datatable columns={categoryColumns} />
      </div>
    </div>
  );
};

export default MyList;
