import React from 'react'
import * as S from './productQuantityController.style'
import PropTypes from 'prop-types'

export default function ProductQuantityController({
  onChange,
  onIncrease,
  onDecrease,
  onInput,
  onBlur,
  disabled,
  max,
  value
}) {
  const handleChange = value => {
    let _value = Number(value)
    if (_value > max) {
      _value = max
    } else if (value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onInput && onInput(_value)
  }

  const increase = () => {
    let _value = value + 1
    if (_value > max) {
      _value = max
    }
    onChange && onChange(_value)
    onIncrease && onIncrease(_value)
  }

  const decrease = () => {
    let _value = value - 1
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onDecrease && onDecrease(_value)
  }

  const handleBlur = value => {
    onBlur && onBlur(Number(value))
  }

  return (
    <S.ProductQuantityController>
      <S.ProductQuantityButton
        onClick={() => {
          !disabled && decrease()
        }}
        disabled={disabled}
      >
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon "
        >
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.ProductQuantityButton>
      <S.ProductQuantityInput
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <S.ProductQuantityButton
        onClick={() => {
          !disabled && increase()
        }}
        disabled={disabled}
      >
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon icon-plus-sign"
        >
          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
        </svg>
      </S.ProductQuantityButton>
    </S.ProductQuantityController>
  )
}

ProductQuantityController.propTypes = {
  onChange: PropTypes.func,
  max: PropTypes.number,
  value: PropTypes.number
}
