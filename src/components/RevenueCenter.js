import React from 'react'
import propTypes from 'prop-types'
import { stripTags } from '@open-tender/js'
import RevenueCenterOrder from './RevenueCenterOrder'
import RevenueCenterAction from './RevenueCenterAction'

const placeholder2 =
  'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588303325_976877dbfac85a83d9e9.jpg'

const RevenueCenter = ({
  revenueCenter,
  classes = '',
  showImage,
  isOrder,
  isLanding,
}) => {
  const { address, images, hours, is_outpost } = revenueCenter
  let smallImage = images.find((i) => i.type === 'SMALL_IMAGE')
  smallImage = smallImage ? smallImage.url : null
  const bgStyle = { backgroundImage: `url(${smallImage || placeholder2}` }
  const phoneUrl = address.phone ? `tel:${address.phone}` : null
  const hoursDesc = hours.description ? stripTags(hours.description) : null
  classes = `rc ot-bg-color-primary ot-border-radius ${classes}`
  const hoursDescIcon = is_outpost ? 'AlertCircle' : 'Clock'
  const hoursDescClass = is_outpost ? 'ot-color-alert' : 'ot-color-secondary'

  const distance =
    revenueCenter.distance !== null && revenueCenter.distance !== undefined
      ? revenueCenter.distance
      : null

  return (
    <div className={classes}>
      {showImage && (
        <div
          className="rc__image bg-image ot-bg-color-secondary"
          style={bgStyle}
        >
          &nbsp;
        </div>
      )}
      <div className="rc__content">
        <div className="rc__header">
          <h2 className={isLanding ? 'ot-font-size-h3' : 'ot-font-size-h4'}>
            {revenueCenter.name}
          </h2>
          {distance !== null && (
            <p className="ot-font-size-small ot-color-secondary">
              {distance.toFixed(2)} miles away
            </p>
          )}
        </div>
        <div className="rc__actions">
          <a
            className="no-link"
            href={revenueCenter.directions_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <RevenueCenterAction icon="MapPin" text={address.street} />
          </a>
          {phoneUrl && (
            <a
              className="no-link"
              href={phoneUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <RevenueCenterAction icon="Phone" text={address.phone} />
            </a>
          )}
          {hoursDesc && (
            <RevenueCenterAction
              icon={hoursDescIcon}
              iconClass={hoursDescClass}
              text={hoursDesc}
              arrow={null}
            />
          )}
        </div>
        <RevenueCenterOrder
          revenueCenter={revenueCenter}
          isOrder={isOrder}
          isLanding={isLanding}
        />
      </div>
    </div>
  )
}

RevenueCenter.displayName = 'RevenueCenter'
RevenueCenter.propTypes = {
  revenueCenter: propTypes.object,
  classes: propTypes.string,
  showImage: propTypes.bool,
  isOrder: propTypes.bool,
  isLanding: propTypes.bool,
}

export default RevenueCenter
