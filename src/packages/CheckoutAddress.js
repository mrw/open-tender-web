import React, { useState, useCallback } from 'react'
import propTypes from 'prop-types'
import { Input } from './Inputs'
import debounce from 'lodash/debounce'

const initialState = {
  unit: '',
  company: '',
  contact: '',
  phone: '',
}

const AddressInfo = ({
  title = 'Order Details',
  requiredFields,
  updateCheck,
  order,
}) => {
  const [address, setAddress] = useState(initialState)

  const debouncedUpdate = useCallback(
    debounce((newAddress) => updateCheck({ address: newAddress }), 500),
    []
  )

  const handleChange = (evt) => {
    const { id, value } = evt.target
    const field = id.replace('address-', '')
    const newAddress = { ...address, [field]: value }
    setAddress(newAddress)
    debouncedUpdate(newAddress)
  }

  const errors = {}
  const unitRequired = requiredFields.includes('unit')
  const companyRequired = requiredFields.includes('company')
  const contactRequired = requiredFields.includes('contact')
  const phoneRequired = requiredFields.includes('phone')
  return (
    <fieldset className="form__fieldset">
      <legend className="form__legend heading ot-font-size-h4">{title}</legend>
      <div className="form__inputs">
        {unitRequired && (
          <Input
            label="Unit / Suite"
            name="address-unit"
            type="text"
            value={address.unit}
            onChange={handleChange}
            error={errors.unit}
            required={true}
            classes={`${companyRequired ? 'form__input--left' : ''}`}
          />
        )}
        {companyRequired && (
          <Input
            label="Company"
            name="address-company"
            type="text"
            value={address.company}
            onChange={handleChange}
            error={errors.company}
            required={true}
            classes={`${unitRequired ? 'form__input--right' : ''}`}
          />
        )}
        {contactRequired && (
          <Input
            label="Contact Person"
            name="address-contact"
            type="text"
            value={address.contact}
            onChange={handleChange}
            error={errors.contact}
            required={true}
            classes={`${phoneRequired ? 'form__input--left' : ''}`}
          />
        )}
        {phoneRequired && (
          <Input
            label="Contact Phone"
            name="address-phone"
            type="tel"
            value={address.phone}
            onChange={handleChange}
            error={errors.phone}
            required={true}
            classes={`${contactRequired ? 'form__input--right' : ''}`}
          />
        )}
      </div>
    </fieldset>
  )
}

AddressInfo.displayName = 'AddressInfo'
AddressInfo.propTypes = {
  title: propTypes.string,
  updateCheck: propTypes.func,
  requiredFields: propTypes.array,
  order: propTypes.object,
}

export default AddressInfo