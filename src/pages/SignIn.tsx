import React from 'react';
import { Link } from "react-router-dom";
import '../styles/SignIn.scss';

const SignIn = () => {
    return(
        <div className='signin'>
            <div className='signin_area'>
                <h1 className='blind'>로그인</h1>
                <div className='signin_input_area'>
                    <InputBoxComponent inputType='text' />
                    <InputBoxComponent inputType='password' />
                </div>
                <div className='find_users_area'>
                    <FindUsersComponent />
                    <BtnSignUpComponent />
                </div>
                <SubmitBtnComponent />
                <div className='social_signin_area'>
                    <SignInByOauthComponent />
                </div>
            </div>
        </div>
    );
}

interface InputBoxProps{
    inputType: string;
}

const InputBoxComponent = ( {inputType}: InputBoxProps ): JSX.Element => {
    const DIV_CLASSNAME = (inputType === 'text') ? 'form_id_outter' : 'form_pw_outter';
    const INPUT_CLASSNAME = (inputType === 'text') ? 'form_id_inner' : 'form_pw_inner';
    const SPAN_CLASSNAME = (inputType === 'text') ? 'form_id_alert' : 'form_pw_alert';

    const PLACEHOLDER_TEXT_CLASSNAME = (inputType === 'text') ? '아이디' : '비밀번호';
    const SPAN_TEXT_CLASSNAME = (inputType === 'text') ? '아이디를 입력해주세요' : '비밀번호를 입력해주세요';

    return(
        <div className={DIV_CLASSNAME}>
            <input type={inputType} placeholder={PLACEHOLDER_TEXT_CLASSNAME} className={INPUT_CLASSNAME}/>
            <span className={SPAN_CLASSNAME}>{SPAN_TEXT_CLASSNAME}</span>
        </div>
    );
}

const SubmitBtnComponent = (): JSX.Element => {
    return(
        <div className='btn_signin'>
            <a href='/' className='btn_signin_submit'>
                <span className='btn_signin_text'>로그인</span>
            </a>
        </div>
    );
}

const FindUsersComponent = (): JSX.Element => {
    return(
        <ul className='find_users'>
            <li className='find_users_id'>
                <Link to='/FindId'>아이디 찾기</Link>
            </li>
            <li className='find_users_pw'>
                <Link to='/'>비밀번호 찾기</Link>
            </li>
        </ul>
    );
}

const BtnSignUpComponent = (): JSX.Element => {
    return(
        <span>
            <Link to='/' className='btn_signup'>회원가입</Link>
        </span>
    );
}

const SignInByOauthComponent = (): JSX.Element => {
    return(
        <ul>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
        </ul>
    );
}


export default SignIn;
