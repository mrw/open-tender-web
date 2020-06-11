import React from 'react'
import propTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectOrder,
  setRequestedAt,
  selectTimezone,
} from '../../slices/orderSlice'
import { closeModal } from '../../slices/modalSlice'
import ModalClose from '../ModalClose'
import { RequestedAtPicker } from '../../packages'
import {
  makeRequestedAtString,
  makeEstimatedTime,
} from '../../packages/utils/datetimes'

const RequestedAtModal = () => {
  const dispatch = useDispatch()
  const { requestedAt, serviceType, location } = useSelector(selectOrder)
  const tz = useSelector(selectTimezone)

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleRequestedAt = (requestedAt) => {
    dispatch(setRequestedAt(requestedAt))
    dispatch(closeModal())
  }

  const estimatedTime = makeEstimatedTime(requestedAt, location, serviceType)
  const requestedAtText = makeRequestedAtString(requestedAt, tz, true)

  return (
    <>
      <ModalClose onClick={handleClose} />
      <div className="modal__content">
        <div className="modal__header">
          <p className="modal__title heading ot-font-size-h3">
            Choose an order date & time
          </p>
          <p className="modal__subtitle ot-bold ot-alert-color font-size-big">
            Your current order time is {requestedAtText}
            {estimatedTime ? ` (${estimatedTime})` : ''}.
          </p>
          <div className="modal__header__buttons">
            <button className="btn" onClick={handleClose}>
              Keep This Time
            </button>
            {requestedAt !== 'asap' && (
              <button className="btn" onClick={() => handleRequestedAt('asap')}>
                Change to ASAP
              </button>
            )}
          </div>
        </div>
        <div className="modal__body">
          <p className="font-size-small">
            Or use the calendar below to choose a different day & time.
          </p>
          {location && (
            <RequestedAtPicker
              requestedAt={requestedAt}
              serviceType={serviceType}
              location={location}
              setRequestedAt={handleRequestedAt}
            />
          )}
        </div>
      </div>
    </>
  )
}

RequestedAtModal.displayName = 'RequestedAtModal'
RequestedAtModal.propTypes = {
  close: propTypes.func,
}

export default RequestedAtModal
