import React,{useState} from "react";
import Alerta from './Alerta'
const Contact = ({id}) => {


  const [alert, setAlert] = useState({
    state:false,
    color:'alert-dark',
    mensaje:'asdf'
  })

  const [datos, setDatos] = useState({
    nombre:"",
    email:"",
    mensaje:""
  })


  const onChange = (e)=>{
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
  }


  const onSubmitFormP = e =>{
    const {nombre,email,mensaje} = datos
    e.preventDefault()

    if (nombre.trim() === ''|| email.trim() === '' || mensaje.trim() === '') {
      setAlert({state:true,color:'alert-dark',mensaje:'Exiten campos invalidos'})
      
      return
    }
    setAlert({state:true,color:'alert-light',mensaje:'El email ha sido enviado correctamente'})
    setTimeout(() => {
      setAlert({state:false})
    }, 3000);
  }


  return (
    <div className="container pb-5  mt-5" id={id}>

      <h2 className="display-4 text-center text-white mb-5 pb-5">Contact</h2>
      <form className=" text-white" onSubmit={onSubmitFormP}>
        {alert.state ? 
        <Alerta datos={alert}/>:null}
        <div class="form-group">
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control p-4 bg-dark text-white"
                placeholder="Name"
                onChange={onChange}
                name='nombre'
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control p-4 bg-dark text-white"
                placeholder="Email"
                onChange={onChange}
                name='email'
              />

            </div>
          </div>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-4 p-4 bg-dark text-white"
            placeholder="Subject"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control mt-5 bg-dark text-white"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
            onChange={onChange}
            name='mensaje'
          ></textarea>
        </div>
        <div className="row d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-outline-light btn-block align-self-center m-4 pt-2 pb-2 pr-4 pl-4"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
