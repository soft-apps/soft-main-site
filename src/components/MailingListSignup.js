import React, { Component } from "react";
import jsonp from "jsonp";
import classNames from "classnames";

import "../styles/MailingList.scss";

class MailingListSignup extends Component {
  state = {
    formState: "default",
    isSubmitting: false
  };

  render() {
    const { formState, isSubmitting } = this.state;
    const classes = classNames("MailingList-form", {
      "is-submitting": isSubmitting
    });
    return (
      <div className={classes}>
        <div className="MailingList-form-content">
          {formState !== "success" && this.renderForm()}

          {formState == "error" && (
            <div className="MailingList-subscribe-error">
              Invalid or duplicate email.
            </div>
          )}

          {formState == "success" && (
            <div className="MailingList-subscribe-success">Subscribed.</div>
          )}
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <form>
        <input type="email" placeholder="Email" ref="email" />
        <input type="submit" value="Subscribe" onClick={this.handleSubmit} />
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (this.state.isSubmitting) return;
    this.setState({ isSubmitting: true });

    const email = this.refs.email.value;
    const url =
      "https://works.us20.list-manage.com/subscribe/post-json?u=4d1e153db4d3e503c37960b9e&amp;id=1530ff67ad&EMAIL=" +
      email;

    jsonp(url, { param: "c" }, (err, data) => {
      if (err) this.setState({ formState: "error" });
      else this.setState({ formState: data.result });
      this.setState({ isSubmitting: false });
    });
  };
}

export default MailingListSignup;
