import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderServiceType } from '@open-tender/redux'
import { selectConfig } from '../slices'
import OrderTypeButton from './OrderTypeButton'

const OrderType = () => {
  const dispatch = useDispatch()
  const { home: homeConfig } = useSelector(selectConfig)
  const { title, subtitle, content, buttons } = homeConfig

  const handleOutpost = (evt) => {
    evt.preventDefault()
    dispatch(setOrderServiceType('OLO', 'PICKUP', true))
    evt.target.blur()
  }

  const handlePickup = (evt) => {
    evt.preventDefault()
    dispatch(setOrderServiceType('OLO', 'PICKUP'))
    evt.target.blur()
  }

  const handleDelivery = (evt) => {
    evt.preventDefault()
    dispatch(setOrderServiceType('OLO', 'DELIVERY'))
    evt.target.blur()
  }

  const handleCatering = (evt) => {
    evt.preventDefault()
    dispatch(setOrderServiceType('CATERING', 'DELIVERY'))
    evt.target.blur()
  }

  const handleMerch = (evt) => {
    evt.preventDefault()
    dispatch(setOrderServiceType('MERCH', 'DELIVERY'))
    evt.target.blur()
  }

  const handler = {
    outpost: handleOutpost,
    pickup: handlePickup,
    delivery: handleDelivery,
    catering: handleCatering,
    merch: handleMerch,
  }

  return (
    <div className="card ot-opacity-light ot-border-radius slide-up">
      <div className="card__header">
        <p className="ot-preface">{subtitle}</p>
        <h1 className="ot-font-size-h3">{title}</h1>
        <p className="ot-subtitle">{content}</p>
      </div>
      <div className="card__content">
        {buttons.map((i) => (
          <OrderTypeButton key={i.type} {...i} handler={handler[i.type]} />
        ))}
      </div>
    </div>
  )
}

OrderType.displayName = 'OrderType'
export default OrderType
