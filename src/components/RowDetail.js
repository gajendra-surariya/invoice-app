import './RowDetail.css'
import {Link} from 'react-router-dom';

const RowDetail = (props)=> {

    const data = props.Data_detail;
    return(
    <div>
    
    <div className="detail-header">
      {" "}
      <span>   <div className="item-created-at">Status </div></span>
   
      <span>
      <div
       
        className={`${
          data.paymentstatus === "Paid"
            ? "item-status-container-green"
            : "item-status-container"
        }`}
      >
        <div
       
          className={`${
            data.paymentstatus === "Paid" ? "green-dot" : "dot"
          }`}
        ></div>
        <p id="status-value">{data.paymentstatus}</p>
      </div>
      </span>
      <Link to='/' >
      <button 
              
              type="button"
              className="btn btn-secondary aligning"
              data-bs-dismiss="modal"

            >
              Back
      </button>
      </Link>

    </div>

    <div className="detail-card">
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='transaction_id'>
            <span id="hashtag-color">#</span>{data.transaction_no}
          </div>
          <div className="item-created-at"> Transaction No.</div>
           
        </div>
        <div className="col-6 item-created-at-right">
          <p>{data.client_name}</p>
          <p>{data.client_email}</p>
        </div>
      </div>
      <div className="row">
       <div className="col-6">
         <p className="item-created-at">Due Date</p>
         <p className="item-payment-due-detail">{data.due_date}</p>
       </div>
      </div>
      <div className="row">
       <div className="col-6">
         <p className="item-created-at"><em>Notes</em></p>
         <p className="item-created-at">{data.notes}</p>
       </div>
      </div>
    </div>


    <div className="container detail-card-items">
      <div className="row table-heading">
        <div className="col">
          Item
        </div>
        <div className="col">
          Quantity
        </div>
      </div>
      <div className="row table-main">
        <div className="col">
            Hours of work
        </div>
        <div className="col">
         {data.hoursofwork}
        </div>
      </div>
      <div className="row table-main">
        <div className="col">
            Expenses
        </div>
        <div className="col">
          <span>{data.expense} Rs</span>
        </div>
      </div>
      <div className="row table-main">
        <div className="col">
            Material
        </div>
        <div className="col">
            {data.material}
        </div>
      </div>
      <div className="row table-main">
        <div className="col">
            Labor
        </div>
        <div className="col">
           {data.labor}
        </div>

      </div>
      <div className="row table-main">
        <div className="col table-bottom">
            Total
        </div>
        <div className="col table-bottom">
          <span>{data.total}</span>
           
        </div>
      </div>
      

        
    </div>
  </div>
  </div>
    );
}

export default RowDetail;