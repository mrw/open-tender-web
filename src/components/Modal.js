import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAlert, resetAlert } from '@open-tender/redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { selectModal, closeModal, openModal, toggleSidebar } from '../slices'
import ModalOverlay from './ModalOverlay'
import ModalLoading from './ModalLoading'
import {
  LoginModal,
  SignUpModal,
  AddressModal,
  AllergensModal,
  MenuItemModal,
  RequestedAtModal,
  CartErrorsModal,
  CreditCardModal,
  WorkingModal,
  ClosedModal,
  AdjustRequestedAtModal,
  OrderRatingModal,
  OrderTypeModal,
  CartCountsModal,
} from './modals'

const makeModal = (type, windowRef, args = {}) => {
  switch (type) {
    case 'login':
      return <LoginModal {...args} />
    case 'signUp':
      return <SignUpModal windowRef={windowRef} {...args} />
    case 'address':
      return <AddressModal windowRef={windowRef} {...args} />
    case 'creditCard':
      return <CreditCardModal windowRef={windowRef} {...args} />
    case 'allergens':
      return <AllergensModal {...args} />
    case 'item':
      return <MenuItemModal {...args} />
    case 'requestedAt':
      return <RequestedAtModal {...args} />
    case 'adjustRequestedAt':
      return <AdjustRequestedAtModal {...args} />
    case 'cartErrors':
      return <CartErrorsModal {...args} />
    case 'cartCounts':
      return <CartCountsModal {...args} />
    case 'working':
      return <WorkingModal {...args} />
    case 'closed':
      return <ClosedModal {...args} />
    case 'orderType':
      return <OrderTypeModal {...args} />
    case 'rating':
      return <OrderRatingModal {...args} />
    default:
      return null
  }
}

const classesMap = {
  signUp: 'modal--big',
  item: 'modal--item',
  address: 'modal--big',
  creditCard: 'modal--big',
  requestedAt: 'modal--big modal--datepicker',
  allergens: 'modal--big modal--allergens',
  cartErrors: 'modal--big modal--cart-errors',
  cartCounts: 'modal--big modal--cart-errors',
  working: 'modal--working',
}

const Modal = () => {
  const windowRef = useRef()
  const dispatch = useDispatch()
  const alert = useSelector(selectAlert)
  const { loading, type, args } = useSelector(selectModal)
  const preventClose = args && args.preventClose ? true : false
  const showModal = type ? true : false
  const modal = type ? makeModal(type, windowRef, args) : null
  const classes = `modal-container ${classesMap[type] || ''}`

  useEffect(() => {
    if (alert) {
      if (alert.type === 'closeAndSidebar') {
        dispatch(closeModal())
        dispatch(toggleSidebar())
      } else if (alert.type === 'close') {
        dispatch(closeModal())
      } else {
        dispatch(openModal(alert))
      }
      dispatch(resetAlert())
    }
  }, [alert, dispatch])

  const handleClose = (evt) => {
    if (!preventClose && evt.target.id === 'modal-container') {
      dispatch(closeModal())
    }
  }

  return (
    <>
      <ModalOverlay show={showModal || loading} />
      <ModalLoading show={loading} />
      <TransitionGroup component={null}>
        {showModal ? (
          <CSSTransition
            key="modal"
            classNames="md"
            timeout={{ enter: 250, exit: 250 }}
          >
            <div
              ref={windowRef}
              id="modal-container"
              className={classes}
              onClick={handleClose}
            >
              <div className="modal ot-bg-color-primary ot-border-radius">
                {modal}
              </div>
            </div>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </>
  )
}

Modal.displayName = 'Modal'

export default Modal
