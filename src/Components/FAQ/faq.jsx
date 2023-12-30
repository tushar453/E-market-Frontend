import React from "react";
import Sidebar from "../sidebar/sidebar";
import Footer2 from "../footer/footer2";

const FAQ = () => {
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        {" "}
        <div style={{ padding: "20px", minHeight: "100vh" }}>
          {" "}
          <h2 style={{ fontSize: "40px" }}>FAQ</h2>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 1. What customized products do you offer? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* We offer a range of customized products including phone covers,
            skins, pop sockets, grippers, and frames. */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 2. How can I customize my phone cover? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* You can customize your phone cover by uploading your preferred
            design. We offer options for glass covers, soft covers, and hard
            covers. */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 3. What happens after I upload my design for a Frame? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* Once you upload your design, our designer will convert it into an
            illustration and confirm the design with you on WhatsApp. If you're
            satisfied with the final design, we'll send it to you. */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 4. Can I add pop sockets and grippers to my phone cover? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* Yes, you can add pop sockets and grippers to your phone cover for
            just 59 rupees. */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 5. What is the expected delivery time for products? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* We aim to deliver your product within 7-10 days. For any queries,
            please contact us on WhatsApp. */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            6. How can I track my order?
          </div>
          <p style={{ textAlign: "left" }}>
            {/* You will receive a tracking link on your WhatsApp within 2-3 days
            after making your payment. */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 7. What payment options do you offer? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* We provide two payment options: Cash on Delivery (COD) and online
            payment */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 8. Is there an extra charge for Cash on Delivery (COD) orders? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* Yes, COD orders will incur an additional charge of 49 rupees as
            payment handling fees. */}
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            {/* 9. Do you accept returns on customized products? */}
          </div>
          <p style={{ textAlign: "left" }}>
            {/* As we provide high-quality customized products based on your chosen
            design, we do not accept returns. However, if you encounter any
            issues, please contact us on WhatsApp for assistance. */}
          </p>
          <p style={{ textAlign: "left" }}>
            {/* If you have any further questions or need assistance, feel free to
            reach out to us on WhatsApp or through our contact page. We're here
            to help! */}
          </p>
        </div>
        <Footer2 />
      </div>
    </div>
  );
};

export default FAQ;
