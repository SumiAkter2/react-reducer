import React from "react";

const ShortForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" id="name"/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShortForm;
