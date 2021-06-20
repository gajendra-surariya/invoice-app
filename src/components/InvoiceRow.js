import "./InvoiceRow.css";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const InvoiceRow = (props) => {
  const data = props.datafill;
  const sendDataHandler = () => {
    props.onClickDetail(data)
  }

  return (
      
      <Link to={ { 
        pathname: "/detail/",
       
       
    }} role='button' onClick={sendDataHandler} style={{ textDecoration: 'none' }}>
            <div className="data-row">
      <h3 className="item-id">
        <span id="hashtag-color">#</span>{props.datafill.transaction_no}
      </h3>
      <p className="item-created-at">{props.datafill.due_date}</p>
      <p className="item-client-name">{props.datafill.client_name}</p>
      <h3 className="item-payment-due">Rs {props.datafill.total}</h3>
      <div className="colored-part-and-arrow">
        <div className={`${props.datafill.paymentstatus==="Paid"?'item-status-container-green':'item-status-container'}`}>
          <div className={`${props.datafill.paymentstatus==="Paid"?'green-dot':'dot' }`}></div>
          <p id="status-value">{props.datafill.paymentstatus}</p>
        </div>
        <i class="fas fa-xs arrow fa-chevron-right"></i>
      </div>
     
    </div>
    
      </Link>
  );
};

export default InvoiceRow;
