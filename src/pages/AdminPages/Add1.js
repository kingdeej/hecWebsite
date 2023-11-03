import React, { Component } from "react";

export default class Add1 extends Component {
  state = {
    eventName: "",
    eventPrice: "",
    eventDate: "",
    eventStreet: "",
    streetAddress: "",
  };
  handleButtonClick = (e) => {
    e.preventDefault()
    this.props.getEventDetails(this.state);
    this.props.handleButtonClick()
  };
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
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
          placeholder="Event Name"
          type="text"
          name="eventName"
          id="eventName"
        />
        <input
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="text-input"
          required
          placeholder="Event Price"
          type="text"
          name="eventPrice"
          id="eventPrice"
        />
        <input
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="text-input"
          required
          type="date"
          name="eventDate"
          id="eventDate"
        />
        <hr />
        <div className="location-wrapper space-between">
          <input
            onChange={(e) => {
              this.handleChange(e);
            }}
            className="text-input"
            required
            placeholder="Street"
            type="text"
            name="eventStreet"
            id="eventStreet"
          />
          <input
            onChange={(e) => {
              this.handleChange(e);
            }}
            className="text-input"
            required
            placeholder="Parish"
            type="text"
            name="eventParish"
            id="Parish"
          />
        </div>
        <input
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="text-input"
          required
          placeholder="Street Address"
          type="text"
          name="streetAddress"
          id="streetAddress"
        />
        <button 
        // onClick={(e) => {
        //     this.handleButtonClick(e);
        //     }} 
        type="submit" className="button get-tickets-button">
          Next
        </button>
      </form>
    );
  }
}
