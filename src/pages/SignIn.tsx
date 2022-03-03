import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/SignIn.module.scss';

const SignIn = () => {
    return(
        <div className={styles.signin}>
            <div className={styles.signin_area}>
                <h1 className={styles.blind}>로그인</h1>
                <div className={styles.signin_input_area}>
                    <InputBoxComponent inputType='text' />
                    <InputBoxComponent inputType='password' />
                </div>
                <div className={styles.find_users_area}>
                    <FindUsersComponent />
                    <BtnSignUpComponent />
                </div>
                <SubmitBtnComponent />
                <div className={styles.social_signin_area}>
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
    const DIV_CLASSNAME = (inputType === 'text') ? styles.form_id_outter : styles.form_pw_outter;
    const INPUT_CLASSNAME = (inputType === 'text') ? styles.form_id_inner : styles.form_pw_inner;
    const SPAN_CLASSNAME = (inputType === 'text') ? styles.form_id_alert : styles.form_pw_alert;

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
        <div className={styles.btn_signin}>
            <a href='/' className={styles.btn_signin_submit}>
                <span className={styles.btn_signin_text}>로그인</span>
            </a>
        </div>
    );
}

const FindUsersComponent = (): JSX.Element => {
    return(
        <ul className={styles.find_users}>
            <li className={styles.find_users_id}>
                <Link to='/FindId'>아이디 찾기</Link>
            </li>
            <li className={styles.find_users_pw}>
                <Link to='/FindPw'>비밀번호 찾기</Link>
            </li>
        </ul>
    );
}

const BtnSignUpComponent = (): JSX.Element => {
    return(
        <span>
            <Link to='/SignUp' className={styles.btn_signup}>회원가입</Link>
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
