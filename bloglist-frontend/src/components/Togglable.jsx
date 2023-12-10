import { useState, useImperativeHandle, forwardRef } from 'react'


const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <div style={{ marginTop: 20 }}>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button> {/* Replaced SmallButton with button */}
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button> {/* Replaced SmallButton with button */}
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable
