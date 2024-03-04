import React, { Component } from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export class Add3 extends Component {
  state = {
    promoterName: "",
    promoterEmail: "",
    promoterNumber: 0,
    promoterInstagram: "",
    promoterFacebook: "",
    promoterWhatsapp: "",
  };
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleButtonClick = (e) => {
    e.preventDefault()
    this.props.onSubmitEvent(this.state)
  }
  
  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleButtonClick(e);
        }}
        className="add-event | flex-column space-between"
      >
        <h2 className="secondary-header">Add event info</h2>
        <input
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="text-input"
          required
          placeholder="Promoter Name"
          type="text"
          name="promoterName"
          id="promoterName"
        />
          <input
            onChange={(e) => {
              this.handleChange(e);
            }}
            className="text-input"
            placeholder="Promoter Phone Number"
            type="number"
            name="promoterNumber"
            id="promoterNumber"
          />
        <input
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="text-input"
          placeholder="Promoter Email"
          type="email"
          name="promoterEmail"
          id="promoterEmail"
        />
        <label htmlFor="">Additional Photos</label>

        <ul className="promoter-links-wrapper space-between">
          <li className="promoter-link-wrapper flex-column">
            <AiOutlineInstagram />
            <input
              onChange={(e) => {
                this.handleChange(e);
              }}
              className="text-input"
              placeholder="Add Social Link"
              type="text"
              name="promoterInstagram"
              id="promoterName"
            />
          </li>
          <li className="promoter-link-wrapper flex-column">
            <AiFillFacebook />

            <input
              onChange={(e) => {
                this.handleChange(e);
              }}
              className="text-input"
              placeholder="Add Social Link"
              type="text"
              name="promoterFacebook"
              id="promoterName"
            />
          </li>
          <li className="promoter-link-wrapper flex-column">
            <AiOutlineWhatsApp />
            <input
              onChange={(e) => {
                this.handleChange(e);
              }}
              className="text-input"
              placeholder="Add Social Link"
              type="text"
              name="promoterWhatsapp"
              id="promoterName"
            />
          </li>
        </ul>
        <button type="submit" className="button get-tickets-button">
          Submit
        </button>
      </form>
    );
  }
}

export default Add3;
