import React, { Component } from "react";
import "./App.css";
import CouponCard from "./components/CouponCard";

const couponData = {
  id: 2323,
  couponDescription: "优惠卷8.5折",
  validDate: "2018.08.22-2018.09.12",
  number: 23,
  amount: 8.5,
  unit: "折"
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <CouponCard valid data={couponData} />
      </div>
    );
  }
}

export default App;
