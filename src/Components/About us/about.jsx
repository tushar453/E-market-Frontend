import React from "react";
import Sidebar from "../sidebar/sidebar";
import Footer2 from "../footer/footer2";

const About = () => {
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        {" "}
        <div style={{ padding: "20px", minHeight: "100vh" }}>
          {" "}
          <h2 style={{ fontSize: "40px" }}>About Us</h2>
          <div style={{ fontSize: "18px" }}>
            <p>
              {/* We curate stunning designs and print them on all short of quality
              cases, pop sockets,T-shirts, and other items. */}
            </p>
            <p>
              {/* Our main motive is to provide the best quality customized products
              with Hassle-free treatment that you might lack at others. */}
            </p>
            <p>
              {/* We started this journey feire years back but till now onto the
              wholesale segment only. So for now finally moving to customers. */}
            </p>
            <p>
              {/* The founder Tushar Beria and the co -founder Ritesh Sharma are the
              mains of Balaji Cover. We Thank you for giving your valuable
              precious time to visit our website. We promise to deliver what you
              can't assume. */}
            </p>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
};

export default About;
