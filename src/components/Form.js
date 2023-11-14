import React from 'react';

const Form = () => {
  return (
    <div className="container">
      <form>
        <p>Contact Me!</p>
        <input type="name" placeholder="Names" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="button" value="Submit" /><br />
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default Form;