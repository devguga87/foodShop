import React, {forwardRef} from 'react';
import styled from './Input.module.css'

const Input = forwardRef(
  (props, ref) => {
    return (
      <div className={styled.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} id={props.input.id} {...props.input}/>
      </div>
    )
  }
)

export default Input