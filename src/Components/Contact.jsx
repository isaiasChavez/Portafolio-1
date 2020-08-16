import React from "react";
const Contact = () => {
  return (
    <div className="container pb-5  mt-5">
      <h2 className="display-4 text-center text-white mb-5 pb-5">Contact</h2>
      <form className=" text-white">
        <div class="form-group">
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control p-4 bg-dark"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control p-4 bg-dark"
                placeholder="Email"
              />
            </div>
          </div>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-4 p-4 bg-dark"
            placeholder="Subject"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control mt-5 bg-dark"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="row d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-outline-light btn-block align-self-center m-4 pt-2 pb-2 pr-4 pl-4"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
