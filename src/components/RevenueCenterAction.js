import React from 'react'
import propTypes from 'prop-types'
import { iconMap } from '@open-tender/components'

const RevenueCenterAction = ({
  icon,
  iconClass = 'ot-color-secondary',
  text,
  arrow = 'ArrowRight',
}) => {
  const iconArrow = arrow === null ? ' ' : iconMap[arrow]
  return (
    <div className="rc__action">
      <div className={`rc__icon ${iconClass}`}>{iconMap[icon]}</div>
      <div className="rc__text">
        <p className="ot-color-secondary ot-font-size-small">{text}</p>
      </div>
      <div className="rc__arrow ot-color-secondary">{iconArrow}</div>
    </div>
  )
}

RevenueCenterAction.displayName = 'RevenueCenterAction'
RevenueCenterAction.propTypes = {
  icon: propTypes.string,
  iconClass: propTypes.string,
  text: propTypes.string,
  arrow: propTypes.string,
}

export default RevenueCenterAction
