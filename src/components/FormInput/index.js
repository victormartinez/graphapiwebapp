import React from "react"

import PropTypes from "prop-types"

import * as S from "./styled"

function FormInput({ label, placeholder, error, type, ...other }) {

  const { name } = other;

  return (
    <S.InputGroup>
      <S.Label className={name ? `${name}Label` : null}>{label}</S.Label>
      <S.Input {...other} type={type ? type : "text"} placeholder={placeholder} />
      {error && <S.Error>{error}</S.Error>}
    </S.InputGroup>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
}

export default FormInput
