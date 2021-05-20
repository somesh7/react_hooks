import React, {useState} from "react";
import Validation from "./Validation";
import DeleteIcon from '@material-ui/icons/Delete';

const Signup = () => {
    const [userRegistration, setUserRegistration] = useState({
        fullname: "",
        email: "",
        mobile: "",
        password: "",
        cnfpassword: "",
    });
    const [userData, setUserData] = useState([]);

    const [errors,setErrors] = useState({});




    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, [name] : value})
    }
    const storeData = (e) => {

        e.preventDefault();
        
            const newUser = { ...userRegistration, id:new Date().getTime().toString() }
        setUserData([...userData, newUser]);
        setUserRegistration({ fullname: "", email: "", mobile: "", password: "", cnfpassword: "" });
        setErrors(Validation(userRegistration));
        
        
}
   const dataDelete = (id) => {
        alert('Are you sure you want to delete this data??')
       const updatedData = userData.filter((curElem, ind) => {
           return ind !== id;
       });
           setUserData(updatedData)
           setErrors(false);
   }

    return (
        <>
       

        <div className="main_heading">
        
        
        
        
        <div className="main_div">
          {     
                userData.map((curElem, ind) => { 
                    const { id, fullname, email, mobile, password, cnfpassword } = curElem;
                    return (
                        <>
                        <div className="showData" key={id}>
                        
                        <p className="dataDesign"> {fullname}</p>
                        <p className="dataDesign"> {email}</p>
                        <p className="dataDesign"> {mobile}</p>
                        <p className="dataDesign"> {password}</p>
                        <p className="dataDesign"> {cnfpassword}</p> 
                        
                      <button className="icon_style"
                        onClick={() => dataDelete(ind)}>
                        <DeleteIcon 
                         />
                        </button>
                    
                        </div>
                        
                        </>
                    )
                }) 
          }

          
             
        </div>  
        
       
       
        <form action="" className="jerry" onSubmit={storeData}>
        <div className="second">
        <h1 className="data1"> REGISTER </h1>
        </div>
        
        

        <input className="summer"
          type="text"
        name="fullname"
        id="fullname"
        autocomplete="off"
        value={userRegistration.fullname}
        onChange={handleInput}
        placeholder="Full Name"
        >
            
        </input>
        {errors.fullname && <p className="error"> {errors.fullname}</p>}
        
        <input  className="summer"
        
        name="email"
        id="email"
        autocomplete="off"
        value={userRegistration.email}
        onChange={handleInput}
        placeholder="E-Mail"

         type="text"
         >
            
        </input>
        
        {errors.email && <p className="error"> {errors.email}</p>}

        <input
        className="summer"
        name="mobile"
        id="mobile"
        autocomplete="off"
        value={userRegistration.mobile}
        onChange={handleInput}
        placeholder="Mobile"
        type="number"
      />
       
       {errors.mobile && <p className="error"> {errors.mobile}</p>}
        <input 
        autoComplete="off"
        name="password"
        id="password"
        value={userRegistration.password}
        onChange={handleInput}
        placeholder="Password"
         className="summer" type="Password"
           > 
           
            
        </input>
       
        {errors.password && <p className="error"> {errors.password}</p>}


        <input  
        autoComplete="off"
        name="cnfpassword"
        id="cnfpassword"
        value={userRegistration.cnfpassword}
        onChange={handleInput}
        placeholder="Confirm Password"

        className="summer" type="password"
         >
            
        </input>
        {errors.cnfpassword && <p className="error"> {errors.cnfpassword}</p>}

        <div className="tommy">
        <button className="stylee1"
        type="submit">
            SUBMIT
        </button>
        </div>

        </form>
        </div>

        
        </>

          
    );
};

export default Signup;