import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShoppingBag } from 'react-feather'
import { selectCartQuantity } from '@open-tender/redux'
import { Button } from '@open-tender/components'

import { toggleSidebar } from '../slices'

const CartButton = () => {
  const dispatch = useDispatch()
  const cartquantity = useSelector(selectCartQuantity)

  const handleClick = (evt) => {
    evt.preventDefault()
    dispatch(toggleSidebar())
    evt.target.blur()
  }

  return (
    <div className="cart-button">
      <div className="cart-button__container">
        {cartquantity > 0 && (
          <div className="cart-button__count ot-warning ot-bold">
            {cartquantity}
          </div>
        )}
        <Button
          onClick={handleClick}
          classes="cart-button__button ot-btn--highlight"
        >
          <div className="cart-button__icon">
            <ShoppingBag size={null} />
          </div>
        </Button>
      </div>
    </div>
  )
}

CartButton.displayName = 'CartButton'

export default CartButton
