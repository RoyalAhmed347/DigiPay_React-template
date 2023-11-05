import React from "react";

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="main_contect row">
            <div className="info">
              <h3>Contact with our sales team</h3>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, veritatis? Recusandae, alias.
              </p>
              <img src="./images/hero1.jpg" alt="" srcset="" />
            </div>
            <div className="form">
              <form className="contact_form" onSubmit={submitForm}>
                <div className="formRow">
                  <input type="text" placeholder="First name" name="" />
                  <input type="text" placeholder="Second name" name="" />
                </div>
                <div className="formRow">
                  <input type="tel" placeholder="Phone Number" name="" />
                  <input type="email" placeholder="Email" name="" />
                </div>
                <input type="text" placeholder="Address" name="" />
                <textarea name="" placeholder="Enter something"></textarea>
                <div className="checkbox-row">
                  <input
                    className="checkbox"
                    required
                    type="checkbox"
                    id="checkbox"
                  />
                  <label htmlFor="checkbox" className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, .
                  </label>
                </div>
                <button className="btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
