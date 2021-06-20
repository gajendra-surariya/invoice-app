import logo from "./logo.svg";
import "./App.css";
import "./components/Heading";
import { Fragment, useState } from "react";
import Heading from "./components/Heading";
import InvoiceRow from "./components/InvoiceRow";
import RowDetail from "./components/RowDetail";
import {Route} from 'react-router-dom';


const stubdata = [
  {
    paymentstatus: "Paid",
    transaction_no: "2345",
    client_name: "gajedra",
    client_email: "gajendra@gmail.com",
    due_date: "26-11-2021",
    hoursofwork: 24,
    expense: 7000,
    material: "gpu and ram",
    labor: 7,
    total: 24000,
    notes: "had to pay by check",
    key: +5463,
  },
];
function App() {
  const [detaildata, setDetaildata] = useState(stubdata[0]);
  const [rowdata, setRowData] = useState(stubdata);
  const detailDataHandler = (data) => {
    setDetaildata(data);
  }
  const dataChangeHandler = (data) => {
    setRowData((prevState) => {
      return [data, ...prevState];
    });
 
  };

  return (
    <div>
      {" "}
      <Route path='/' exact>
      <Heading onChangeData={dataChangeHandler}></Heading>
      {rowdata.map((currentdatarow) => (
        <InvoiceRow onClickDetail={detailDataHandler} datafill={currentdatarow} />
      ))}
   
      </Route>
      <Route path='/detail/' exact>
        <RowDetail Data_detail={detaildata}></RowDetail>
        </Route> 

      
    </div>





    
  );
}

export default App;
