// import { useState } from "react";
// import axios from "axios";
// import './Register.css'
// function Regform(){
//     const[formdata,setformdata]=useState({
//         'username':'',
//         'email':'',
//         'password':'',
//         'location':'',
//         'phonenumber':''
//     })
//     const submit1=(e)=>{
//         e.preventDefault();
//         // axios.post('http://localhost:5000/addstud2',{formdata}).then((res)=>console.log(res.data))
//         axios.post('http://localhost:4500/addregister',{formdata})
//           .then((res)=>console.log(res.data))
//           .catch((error) => console.log(error))
          
//     }
//     return(
//         <div className="divreg">
//             {/* <h1 className="hhh">REGISTRATION FORM</h1> */}
//             <form  className="reg">
//             <h1 className="hhh">REGISTER HERE</h1>
//                 <label className="lab">USERNAME  :   </label><br/>
//                 <input type="text" name="username" required className="a" placeholder="enter your first name" onChange={(e)=>setformdata({...formdata,username:e.target.value})}/>
//                 <br/>
//                 <br/>
//                 <label className="lab1">EMAIL  :   </label><br/>
//                 <input type="email" name="email" required className="a" placeholder="enter email"  onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
//                 <br/>
//                 <br/>
//                 <label className="lab">PASSWORD  :   </label><br/>
//                 <input type="password" name="password" required className="a" placeholder="enter password"   onChange={(e)=>setformdata({...formdata,password:e.target.value})}/>
//                 <br/>
//                 <br/>
//                 <label className="lab" id="vinn">CURRENT LOCATION  :   </label><br/>
//                 <input type="text" name="location" required className="a" placeholder="enter your current location"   onChange={(e)=>setformdata({...formdata,location:e.target.value})}/>
//                 <br/>
//                 <br/>
//                 <label className="lab" id="vinnu">   MOBILE NUMBER  :   </label><br/>
//                 <input type="number" name="phonenumber" required className="a" placeholder="enter your number"   onChange={(e)=>setformdata({...formdata,phonenumber:e.target.value})}/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <button className="but1" onClick={submit1}>      REGISTER  </button>
//             </form>
//         </div>

//     )

// }

// export default Regform
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; // Import Link
import './Register.css';

function Regform() {
  const [formdata, setformdata] = useState({
    'username': '',
    'email': '',
    'password': '',
    'location': '',
    'phonenumber': ''
  });

  const submit1 = (e) => {
    e.preventDefault();
    // axios.post('http://localhost:5000/addstud2',{formdata}).then((res)=>console.log(res.data))
    axios.post('http://localhost:4500/addregister', { formdata })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="divreg">
      <form className="reg">
        <h1 className="hhh">REGISTER HERE</h1>
        <label className="lab">USERNAME: </label><br />
        <input type="text" name="username" required className="a" placeholder="enter your first name" onChange={(e) => setformdata({ ...formdata, username: e.target.value })} />
        <br />
        <br />
        <label className="lab1">EMAIL: </label><br />
        <input type="email" name="email" required className="a" placeholder="enter email" onChange={(e) => setformdata({ ...formdata, email: e.target.value })} />
        <br />
        <br />
        <label className="lab">PASSWORD: </label><br />
        <input type="password" name="password" required className="a" placeholder="enter password" onChange={(e) => setformdata({ ...formdata, password: e.target.value })} />
        <br />
        <br />
        <label className="lab" id="vinn">CURRENT LOCATION: </label><br />
        <input type="text" name="location" required className="a" placeholder="enter your current location" onChange={(e) => setformdata({ ...formdata, location: e.target.value })} />
        <br />
        <br />
        <label className="lab" id="vinnu">MOBILE NUMBER: </label><br />
        <input type="number" name="phonenumber" required className="a" placeholder="enter your number" onChange={(e) => setformdata({ ...formdata, phonenumber: e.target.value })} />
        <br />
        <br />
        <br />
        <button className="but1" onClick={submit1}>REGISTER</button>
      </form>
      <Link to="/login">Already registered? Login here</Link> {/* Add the link to the login page */}
    </div>
  )
}

export default Regform;
