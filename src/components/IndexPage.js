import React from "react";
import { withRouter } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";

class IndexPage extends React.Component {
  downloadReceipt = () => {
    var opt = {
      filename: "signedlegaldocument.pdf",
    };
    var element = document.getElementById("legal");
    window.html2pdf(element, opt);
  };
  render() {
    return (
      <div className="container">
        <button className="btn btn-danger" onClick={this.downloadReceipt}>
          Download PDF
        </button>
        <div className="row" id="legal">
          <div className="col">
            <p style={{ textAlign: "center" }}>
              This a legal agreement between <h4>Second LLC</h4>
              and <h4>First LLC</h4> both parties agree to meet the requirements
              of this legal agreement.
            </p>
            <p style={{ textAlign: "center" }}>
              Enter your signature below with your mouse
            </p>
            <SignatureCanvas
              penColor="black"
              canvasProps={{ width: 300, height: 300, className: "sigCanvas" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
