import "./skin.css";
import React, { useState, useEffect } from "react";
import "../../general.css";
import frame from "../../../Icons/fmm.png";
import shopbag from "../../../Icons/shopping-bag.png";
import dash from "../../../Icons/dash.png";
import axios from "axios";
import Phone from "./Phone";
const Skins = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setloading] = useState("");

  useEffect(() => {
    console.log("useeffect called");
    async function fetchdata() {
      setloading(true);
      await axios.get("https://emarketbackendd.onrender.com/list").then((res) => {
        const da = res.data;
        setPhones(da);
        setloading(false);
        //  console.log(da);
      });
    }

    fetchdata();
  }, []);
  // useEffect(() => {
  //   async function fetchData() {
  //     setloading(true);
  //     await axios.get("http://127.0.0.1:4000/createPhones").then((res) => {
  //       const da = res.data;
  //       setPhones(da);

  //       setloading(false);
  //       console.log(da);
  //     });
  //   }
  //   fetchData();
  // }, []);
  // console.log(phones)
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Skins
      </p>
      <hr />
      <div className="container-2">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          phones.map((phone) => {
            return (
              <div className="box">
                <Phone path="/phone" phone={phone} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Skins;
