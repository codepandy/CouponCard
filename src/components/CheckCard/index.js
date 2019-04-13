import React, { PureComponent } from 'react'
import styles from './index.less'
import checkImage from './images/check@2x.png'

const checkStyle = {
  backgroundImage: `url(${checkImage})`,
}

export default class CheckCard extends PureComponent {
  onClick = () => {
    const { value, onClick } = this.props
    onClick(value)
  }
  render() {
    const { checked = false, style, className, children } = this.props
    return (
      <div
        className={`${
          checked ? styles.containerChecked : styles.container
        } ${className || ''}`}
        style={style}
        onClick={this.onClick}
      >
        {children}
        {checked ? <div className={styles.trigon} /> : null}
        {checked ? <div className={styles.check} style={checkStyle} /> : null}
      </div>
    )
  }
}
