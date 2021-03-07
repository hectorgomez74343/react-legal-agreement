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

  reloadPage = () => {
    window.location.reload();
  };
  render() {
    return (
      <div>
        <div className="signature-flex">
          <button className="btn-delete-signature" onClick={this.reloadPage}>
            Click here to delete signature
          </button>
          <button className="btn-download-pdf" onClick={this.downloadReceipt}>
            Click here to download PDF
          </button>
        </div>
        <div id="legal">
          <div>
            <p className="align-text">
              This a legal agreement between <strong>Second LLC</strong>
              and <strong>First LLC</strong> both parties agree to meet the
              requirements of this legal agreement.
            </p>
            <p className="align-text">
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
