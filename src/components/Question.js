import { useState } from "react"

const Question = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <p> {props.texto}</p>
      <ul style={{ textDecoration: 'none' }}>
        <li className="opciones">a) {props.a}</li>
        <li className="opciones">b) {props.b}</li>
        <li className="opciones">c) {props.c}</li>
        <li className="opciones">d) {props.d}</li>
        {
          props.e && <li className="opciones">e) {props.e}</li>
        }
        {
          props.f && <li className="opciones">f) {props.f}</li>
        }
      </ul>
      {
        open 
          ? <p onClick={() => setOpen(!open)}>{props.correct}</p>
          : <button onClick={() => setOpen(!open)} className="btn btn-primary">Respuesta</button>
      }
    </>
  )
}

export default Question