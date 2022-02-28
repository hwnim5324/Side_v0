import React from 'react';
import '../styles/SignIn.scss';

const SignIn = () => {
    return(
        <div className='signin'>
            <div className='signin_area'>
                <h1 className='blind'>로그인</h1>
                <div className='signin_input_area'>
                    <div className='form_id_outter'>
                        <input type='text' placeholder='아이디' className='form_id_inner'/>
                        <span className='form_id_alert'>아이디를 입력해주세요</span>
                    </div>
                    <div className='form_pw_outter'>
                        <input type='password' placeholder='비밀번호' className='form_pw_inner'/>
                        <span className='form_pw_alert'>비밀번호를 입력해주세요</span>
                    </div>
                    <div className='btn_signin'>
                        <a className='btn_signin_submit'>
                            <span>로그인</span>
                        </a>
                    </div>
                </div>
                <div className='singin_findidpw_area'>

                </div>
                <div className='signin_sociallogin_area'>
                    
                </div>
            </div>
        </div>
    );
}


export default SignIn;
