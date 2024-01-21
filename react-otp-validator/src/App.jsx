import { useState } from 'react'
import { BsFillShieldLockFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import './App.css'
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  const[otp,setotp] = useState("");
  const[ph, setph] = useState("");
  const [showotp, setshowotp] = useState(false);
  const [user, setuser] =  useState(null);

  function onCaptchVerify()
  {
    if(!window.recaptchaVerifier)
    {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          onSignup()
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }, auth);
    }
  }

  function onSignup()
  {
    onCaptchVerify();
    const phoneNumber = '+' + ph;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setshowotp(true);
          toast.success('OTP sent successfully');
        })
        .catch((error) => {
          console.log(error);
        });
  }

  function onOTPVerify()
  {
    window.confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      setuser(result.user);
      // ...
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <section style={{backgroundColor: '#021430', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
        <div>
          <Toaster toastOptions={{duration: 4000}}/>
          <div id="recaptcha-container"></div>
          {user ? (
            <h2 style={{color:"white", fontSize: '40px'}}>
              Login Success !!
            </h2>
          ) :
          (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
            <h1 style={{color: 'white', fontSize: '50px'}}>Enter your phone number</h1>
            {
              showotp ? (
                <>
                  <div style={{backgroundColor: 'white', display: 'inline-block', padding: '20px', borderRadius: '50%', margin: '10px'}}>
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label style={{color: 'white', fontSize: '30px'}}>
                    <b>Enter your OTP</b>
                  </label>
                  <div style={{padding:'20px'}}>
                    <OtpInput
                      value = {otp}
                      onChange = {setotp}
                      OTPLength = {6}
                      otpType = "number"
                      disabled = {false}
                      autoFocus
                    ></OtpInput>
                  </div>
                  <button onClick={onOTPVerify} style={{padding:'25px', fontSize: '20px', borderRadius: '20px'}} >Verify OTP</button>
                </>
              ) : (
                <>
                  <div style={{backgroundColor: 'white', display: 'inline-block', padding: '20px', borderRadius: '50%', margin: '10px'}}>
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label style={{color: 'white', fontSize: '30px'}}>
                    <b>Verify your Phone Number</b>
                  </label>
                  <div style={{padding:'20px'}}>
                    <PhoneInput country={"in"} value={ph} onChange={setph}></PhoneInput>
                  </div>
                  <button onClick={onSignup} style={{padding:'25px', fontSize: '20px', borderRadius: '20px'}} >Send Code via SMS</button>
                </>
              )}            
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default App
