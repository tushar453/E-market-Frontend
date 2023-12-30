import React from "react";
import Sidebar from "../sidebar/sidebar";
import Footer2 from "../footer/footer2";

const Terms = () => {
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        {" "}
        <div style={{ padding: "20px", minHeight: "100vh" }}>
          {" "}
          <h2 style={{ fontSize: "40px" }}>Terms of service</h2>
          <div style={{ fontWeight: "600" }}>OVERVIEW</div>
          <p>
            By visiting our site and/ or purchasing something from us, you
            engage in our “Service” and agree to be bound by the following terms
            and conditions (“Terms of Service”, “Terms”), including those
            additional terms and conditions and policies referenced herein
            and/or available by hyperlink. These Terms of Service apply to all
            users of the site, including without limitation users who are
            browsers, vendors, customers, merchants, and/ or contributors of
            content. Please read these Terms of Service carefully before
            accessing or using our website. By accessing or using any part of
            the site, you agree to be bound by these Terms of Service. If you do
            not agree to all the terms and conditions of this agreement, then
            you may not access the website or use any services. If these Terms
            of Service are considered an offer, acceptance is expressly limited
            to these Terms of Service. Any new features or tools which are added
            to the current store shall also be subject to the Terms of Service.
            You can review the most current version of the Terms of Service at
            any time on this page. We reserve the right to update, change or
            replace any part of these Terms of Service by posting updates and/or
            changes to our website. It is your responsibility to check this page
            periodically for changes. Your continued use of or access to the
            website following the posting of any changes constitutes acceptance
            of those changes.
          </p>
        </div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Terms;
