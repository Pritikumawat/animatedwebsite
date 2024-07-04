import React from "react";
import { useState,useEffect } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
        
    });
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value,

            };
        });
  };
  

  const formSubmit = (e) => {
    e.preventDefault();
        // e.stopImmediatePropagation();
      // alert(` welcome ${data.fullname}`);
      setformErrors(validate(data));
      setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data);
    };
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      // errors.fullname = "Username is Required";
alert(`${values.fullname},Username is Required `)
    }
    if (!values.phone) {
      errors.phone = "number is Required";

    }
    if (!values.email) {
      errors.email = "email is Required";

    }
    return errors;
  };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                      <form onSubmit={formSubmit}>
                        <div className="mb-3">
                          <label for="exampleFormControlInput1" className="form-label">Fullname</label>
                             <input  type="text" className="form-control" id="exampleFormControlInput1"  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter ur name"/>
                </div>
                <p>{formErrors.fullname}</p>
                            <div className="mb-3">
                              <label for="number" className="form-label">Phone Number</label>
                                <input  type="number" className="form-control" id="number"  name="phone" value={data.phone} onChange={InputEvent} placeholder="enter your number" />
                                </div>
                              <div className="mb-3"> 
                                 <label for="email" className="form-label">Email</label>                             
                                  <input  type="email" className="form-control" id="email"  name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>

                </div>
                <p>{formErrors.email}</p>
                                     <div className="mb-3">
                                         <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                          <textarea  className="form-control" id="exampleFormControlTextarea1"  name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                </div>
                <p>{formErrors.phone}</p>
                            <div class="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
                      </form>
                    </div>
                </div>


            </div>
         </>
    );
};

export default Contact;