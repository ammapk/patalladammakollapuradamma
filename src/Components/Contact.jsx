import React, { useState } from "react";
import swal from 'sweetalert';


const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        msg: ""
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        });
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        // message can be saved to db or email can be sent from here!
        
        swal("Sent!", "Message Sent Successfully!", "success");
    }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                ಪೂರ್ಣ ಹೆಸರು
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                ಇಮೇಲ್ ವಿಳಾಸ
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ಐಡಿ ನಮೂದಿಸಿ"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                ಸಂದೇಶದ ವಿವರಗಳು
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
                <div className="col-12">
                  <button className="btn btn-outline-primary mt-3" type="submit">
                  ಸಲ್ಲಿಸು (Submit)
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
