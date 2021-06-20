import Modal from './Modal'
import './Heading.css'
const Heading = (props) => {
  const formvalueHandler = (data) => {
   console.log("handling reached");
   const headingdata={
     key: +data.transaction_no,
     ...data
   }
   console.log(headingdata);
   props.onChangeData(headingdata);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">Invoices</div>
        <div className="col-4" >
          <button type="button" className="btn rounded-pill btn-primary  " data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fas fa-plus-circle"></i> New Invoice
          </button>
        </div>
      </div>

      <Modal OnFormFilled={formvalueHandler}></Modal>

    </div>
    
  );
};
export default Heading;