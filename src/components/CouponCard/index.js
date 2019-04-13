import React, { PureComponent } from "react";
import styles from "./index.less";

export default class CouponCard extends PureComponent {
  render() {
    const {
      valid = true,
      data = {
        id: 2323,
        couponDescription: "一口价(15KM, 5KG)",
        validDate: "2018.08.22-2018.09.12",
        number: 23,
        amount: 3,
        unit: "折"
      }
    } = this.props;
    const amounts = data.amount.toString().split(".");
    return (
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={valid ? styles.left : styles.leftInvalid} />
          <div className={valid ? styles.couponName : styles.couponNameInvalid}>
            {amounts[0]}
            <span className={styles.subName}>
              {amounts[1] ? `.${amounts[1]}` : ""}
              {data.unit}
            </span>
          </div>
          <div className={styles.dashed} />
          <div className={styles.right}>
            <div className={valid ? styles.title : styles.invalidTitle}>
              折扣卷{data.amount}
              {data.unit}
            </div>
            <div className={styles.desc}>{data.number}张</div>
            <div className={styles.desc}>有效时间：{data.validDate}</div>
          </div>
          <div className={styles.topSemicircle} />
          <div className={styles.bottomSemicircle} />
        </div>
      </div>
    );
  }
}
