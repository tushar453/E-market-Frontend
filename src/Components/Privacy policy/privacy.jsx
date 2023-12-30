import React from "react";
import Sidebar from "../sidebar/sidebar";
import Footer2 from "../footer/footer2";

const Privacy = () => {
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        {" "}
        <div style={{ padding: "20px", minHeight: "100vh", textAlign: "left" }}>
          {" "}
          <h2 style={{ fontSize: "40px" }}>Privacy policy</h2>
          <div style={{ fontWeight: "600" }}>Personal information</div>
          <p style={{ textAlign: "left" }}>
            E-Market DOES NOT trade or sell your personal information in any
            manner, except as specified here in or if you express your consent
            towards the same.
          </p>
          <div style={{ fontWeight: "600" }}>
            Personal Information provided by you is used only:
          </div>
          <p>(a) To facilitate your use of the website;</p>
          <p>
            (b) To respond to your concerns, inquiries or address your requests
            for information about the various services we offer;{" "}
          </p>{" "}
          <p>
            (c) To provide you with information about the Company’s
            services/products and send you information, materials, and offers
            from the Company;
          </p>
          <p>
            (d) To send you important information regarding the website, changes
            to Company’s Terms of Service and various policies and/or other
            miscellaneous information;
          </p>
          <p>
            (e) To send you surveys and marketing communications that the
            Company believes may be of interest to you;
          </p>
          <p>(f) To personalize your experience on our website;</p>
          <p>
            (g) If you purchase any content or avail of any service from the
            website, to complete and fulfill Your purchase, for example, to have
            your payments processed, communicate with you regarding Your
            purchase and provide you with related customer service;{" "}
          </p>
          {/* (g) If you */}
          {/* purchase any content or avail of any service from the website, to
          complete and fulfill Your purchase, for example, to have your payments
          processed, communicate with you regarding Your purchase and provide
          you with related customer service; (i) To administer product
          downloads; (j) To conduct internal reviews and data analysis for the
          Website (e.g., to determine the number of visitors to specific pages
          within the website); (k) To improve the services, content, and
          advertising on the website; (l) To protect the integrity of the
          website; and (m) To comply with legal requirements and disclosures
          provid */}
        </div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Privacy;
