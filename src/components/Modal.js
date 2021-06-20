import react, {useState, useRef} from 'react'

import "./Modal.css";

const Modal = (props) => {
    const [status, setStatus] = useState('Paid');
    const transactionRef = useRef();
    const clientNameRef = useRef();
    const clientEmailRef = useRef();
    const dueDateRef = useRef();
    const hoursofworkRef = useRef();
    const expensesRef = useRef();
    const materialRef = useRef();
    const laborRef = useRef();
    const totalRef = useRef();
    const notesRef = useRef();
    const SubmitHandler= () => {
        console.log("submitted");
        console.log(dueDateRef.current.value);
        console.log(status);
        const datacollected= {
            paymentstatus: status,
            transaction_no: transactionRef.current.value,
            client_name: clientNameRef.current.value,
            client_email: clientEmailRef.current.value,
            due_date:dueDateRef.current.value,
            hoursofwork:hoursofworkRef.current.value,
            expense:expensesRef.current.value,
            material:materialRef.current.value,
            labor:laborRef.current.value,
            total:totalRef.current.value,
            notes:notesRef.current.value,
        }
        props.OnFormFilled(datacollected);
         
        transactionRef.current.value=('');
        clientNameRef.current.value=('');
        clientEmailRef.current.value=('');
        dueDateRef.current.value=('');
        hoursofworkRef.current.value=('');
        expensesRef.current.value=('');
        materialRef.current.value=('');
        laborRef.current.value=('');
        totalRef.current.value=('');
        notesRef.current.value=('');

    }
    const DiscardHandler =() => {
        transactionRef.current.value=('');
        clientNameRef.current.value=('');
        clientEmailRef.current.value=('');
        dueDateRef.current.value=('');
        hoursofworkRef.current.value=('');
        expensesRef.current.value=('');
        materialRef.current.value=('');
        laborRef.current.value=('');
        totalRef.current.value=('');
        notesRef.current.value=('');

    }

    const onChoosingpaid = () =>{
        setStatus('Paid')
        console.log("paid");
        console.log(status);
    }
    const onChoosingOutstanding = () => {
        setStatus('Outstanding')
    }
    const onChoosingLate = () => {
        setStatus('Late')
    }
    
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New Invoice
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          
          <div class="modal-body">
            <div className="container">
                
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Transaction No. : </span>
                </div>
                <div className="col-7">
                  <input ref={transactionRef} type="number" />{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Client's Name : </span>
                </div>
                <div className="col-7">
                  <input ref={clientNameRef} type="text" />{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Client's Email : </span>{" "}
                </div>
                <div className="col-7">
                  <input ref={clientEmailRef} type="email" />{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Due Date : </span>{" "}
                </div>
                <div className="col-7">
                  <input ref={dueDateRef} type="date" />{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Hours of Work : </span>{" "}
                </div>
                <div className="col-7">
                  <input ref={hoursofworkRef} type="number" />{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Expenses : </span>
                </div>
                <div className="col-7">
                  <input ref={expensesRef} type="number" />
                  <span>Rs</span>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Material : </span>{" "}
                </div>
                <div className="col-7">
                  <input ref={materialRef} type="text" />{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Labor : </span>
                </div>
                <div className="col-7">
                  <input ref={laborRef} type="number" />{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Total : </span>
                </div>
                <div className="col-7">
                  <input ref={totalRef} type="number" />
                  <span>Rs</span>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="input-group-text">Status : </span>
                </div>
                <div className="col">
                  <div class="dropdown">
                    <button
                      class="btn btn-outline-info dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      value={status}
                    >
                      {status}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li>
                        <button onClick={onChoosingpaid} class="dropdown-item btn-secondary" type="button">
                          Paid
                        </button>
                      </li>
                      <li>
                        <button onClick={onChoosingLate} class="dropdown-item" type="button">
                         Late
                        </button>
                      </li>
                      <li>
                        <button onClick={onChoosingOutstanding} class="dropdown-item" type="button">
                         Outstanding
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-5">
                  <label>Notes :</label>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea ref={notesRef} cols="50" rows="5" name="notes">
                    Write notes here...
                  </textarea>{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button onClick={DiscardHandler}
              type="button"
              class="btn btn-secondary styling"
              data-bs-dismiss="modal"
            >
              Discard
            </button >
            <button type="submit" onClick={SubmitHandler} class="btn btn-primary styling " data-bs-dismiss="modal" >
              Save & Send
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
