import React from 'react';
import { Link } from "react-router-dom";
import '../styles/SignIn.scss';

const SignIn = () => {
    return(
        <div className='signin'>
            <div className='signin_area'>
                <h1 className='blind'>로그인</h1>
                <div className='signin_input_area'>
                    <GetText inputType='text' />
                    <GetText inputType='password' />
                </div>
                <div className='find_users_area'>
                    <FindUsers />
                    <BtnSignUp />
                </div>
                <SubmitBtn />
                <div className='social_signin_area'>
                    <SignInByOauth />
                </div>
            </div>
        </div>
    );
}

const GetText = ( props : { inputType : string }) => {
    let divClass = (props.inputType === 'text') ? 'form_id_outter' : 'form_pw_outter';
    let inputClass = (props.inputType === 'text') ? 'form_id_inner' : 'form_pw_inner';
    let spanClass = (props.inputType === 'text') ? 'form_id_alert' : 'form_pw_alert';

    let phText = (props.inputType === 'text') ? '아이디' : '비밀번호';
    let spanText = (props.inputType === 'text') ? '아이디를 입력해주세요' : '비밀번호를 입력해주세요';

    return(
        <div className={divClass}>
            <input type={props.inputType} placeholder={phText} className={inputClass}/>
            <span className={spanClass}>{spanText}</span>
        </div>
    );
}

const SubmitBtn = () => {
    return(
        <div className='btn_signin'>
            <a href='/' className='btn_signin_submit'>
                <span className='btn_signin_text'>로그인</span>
            </a>
        </div>
    );
}

const FindUsers = () => {
    return(
        <ul className='find_users'>
            <li className='find_users_id'>
                <Link to='/'>아이디 찾기</Link>
            </li>
            <li className='find_users_pw'>
                <Link to='/'>비밀번호 찾기</Link>
            </li>
        </ul>
    );
}

const BtnSignUp = () => {
    return(
        <span>
            <Link to='/' className='btn_signup'>회원가입</Link>
        </span>
    );
}

const SignInByOauth = () => {
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
