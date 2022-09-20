import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p
          style={{
            marginTop: "4rem",
          }}
        >
          Website is coming soon.
        </p>
        <p>
          We are working on the full version of our new site and will be back
          shortly.
        </p>
        <p>
          Shan Dictionary ႁဝ်းတိုၵ်ႉႁၢင်ႈႁႅၼ်းဝႆႉယူႇၶႃႈ ပေႃးဝၼ်းထိႉ 24/09/2022
          ၼႆႉၸိုင် ႁဝ်းၶႃႈ တေပိုတ်ႇ တေၸႂ်ႉတိုဝ်းလႆႈႁႂ်ႈပဵၼ်တင်းၵၢၼ်ၶႃႈ။
        </p>

        <div id="modal">
          <div className="wrapper">
            <h3>Enter Your Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Optin;
