import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../state/actions/index";

const ConnectedForm = ({addArticle}) => {
  const [data, setData] = useState({
    title: ""
  });

  const handleChange = (event) => {
    setData({ [event.target.id]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title } = event.target;
    addArticle({ title: title.value });
    setData({ title: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const Form = connect(null,mapDispatchToProps)(ConnectedForm);

export default Form;