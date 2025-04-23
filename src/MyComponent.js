import React, {useState} from 'react'


//write an app that shows the information only after authorization
//name, email and pw



const MyComponent = () => {

const[pw, setPw] = useState("abcde");
const [MatchPassword, setMatchPassword] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    const pwConfirm = e.target.querySelector('input[type="password"]').value; 
    console.log("kkk",pwConfirm)
    const auth = pwConfirm === pw;
    console.log(auth)
    setMatchPassword(auth)

  }

  return (
    <div className = "Auth">
      <div>
      {MatchPassword ? (
        <div>
        <p>Name: Laxman</p>
        <p>Email: Laxman@gmail.com</p>
        </div>
      ):(

      <form onSubmit={handleSubmit}>
        <input type='password' placeholder='password'/>
        <button type='submit'>Submit</button>
      </form>
      )}
      </div>
    </div>
  )
}

export default MyComponent;
