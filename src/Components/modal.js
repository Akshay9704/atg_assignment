import React, { useState } from 'react'
import artwork from '../Assets/artwork.png'
import facebook from '../Assets/facebook.png'
import google from '../Assets/google.png'

const Modal = () => {
    const [signinShow, setSigninShow] = useState(false);
    const [signupShow, setSignupShow] = useState(true);

    const handleEdit = () => {
        setSigninShow(false);   
        setSignupShow(false);
    };

    const handleSignin = () => {
        setSigninShow(!signinShow);
        setSignupShow(!signupShow);
    };

    const handleSignup = () => {
        setSignupShow(!signupShow);
        setSigninShow(!signinShow);
    }

    return (
        <>
            {signupShow ? (
                <div className="moda-signup">
                    <div className="modal-content">
                        <div className="modal-body">
                            <span className="close" onClick={handleEdit}>
                                &times;
                            </span>
                            <form>
                                <div className='modal-header'>
                                    <h4>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h4>
                                </div>
                                <div className='form-header'>
                                    <h1>Create Account</h1>
                                    <h4>Already have an account? <span onClick={handleSignin}>Sign In</span></h4>
                                </div>
                                <section className='form-section'>
                                    <div className="form-group">
                                        <div className="form-group_name">
                                            <input type="text" placeholder="First Name" />
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <input type="email" placeholder="Enter email" />
                                        <input type="password" placeholder="Password" />
                                        <input type="password" placeholder="Confirm Password" />
                                        <button type="submit" className="form-btn">Create Account</button>
                                        <div className='facebook'>
                                            <img src={facebook} alt="facebook" />
                                            <p>Sign up with Facebook</p>
                                        </div>
                                        <div className='google'>
                                            <img src={google} alt="google" />
                                            <p>Sign up with Google</p>
                                        </div>
                                    </div>
                                    <div className='artwork'>
                                        <img src={artwork} alt="artwork" />
                                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
            ) : null}
            {signinShow ? (
                <div className="moda-signin">
                    <div className="modal-content">
                        <div className="modal-body">
                            <span className="close" onClick={handleEdit}>
                                &times;
                            </span>
                            <form>
                                <div className='modal-header'>
                                    <h4>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h4>
                                </div>
                                <div className='form-header'>
                                    <h1>Sign In</h1>
                                    <h4>Dont have an account yet? <span onClick={handleSignup}>Create new for free</span></h4>
                                </div>
                                <section className='form-section'>
                                    <div className="form-group">
                                        <input type="email" placeholder="Enter email" />
                                        <input type="password" placeholder="Password" />
                                        <button type="submit" className="form-btn">Sign In</button>
                                        <div className='facebook'>
                                            <img src={facebook} alt="facebook" />
                                            <p>Sign in with Facebook</p>
                                        </div>
                                        <div className='google'>
                                            <img src={google} alt="google" />
                                            <p>Sign in with Google</p>
                                        </div>
                                        <p>Forget Password?</p>
                                    </div>
                                    <div className='artwork'>
                                        <img src={artwork} alt="artwork" />
                                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Modal