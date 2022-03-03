import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/FindPw.module.scss';

const FindPw = () => {
    return(
        <div className={styles.findpw}>
            <div className={styles.findpw_area}>
                <h1 className={styles.blind}>비밀번호 찾기</h1>
                <div className={styles.findpw_input_area}>
                    <InputBoxComponent inputType='text' />
                    <InputBoxComponent inputType='tel' />
                </div>
                <div className={styles.find_users_area}>
                    <FindUsersComponent />
                    <BtnSignUpComponent />
                </div>
                <SubmitBtnComponent />
            </div>
        </div>
    );
}

interface InputBoxProps{
    inputType: string;
}

const InputBoxComponent = ( {inputType}: InputBoxProps ): JSX.Element => {
    const DIV_CLASSNAME = (inputType === 'text') ? styles.form_id_outter : styles.form_phone_outter;
    const INPUT_CLASSNAME = (inputType === 'text') ? styles.form_id_inner : styles.form_phone_inner;
    const SPAN_CLASSNAME = (inputType === 'text') ? styles.form_id_alert : styles.form_phone_alert;

    const PLACEHOLDER_TEXT_CLASSNAME = (inputType === 'text') ? '아이디' : '전화번호';
    const SPAN_TEXT_CLASSNAME = (inputType === 'text') ? '아이디를 입력해주세요' : '전화번호를 입력해주세요';

    return(
        <div className={DIV_CLASSNAME}>
            <input type={inputType} placeholder={PLACEHOLDER_TEXT_CLASSNAME} className={INPUT_CLASSNAME}/>
            <span className={SPAN_CLASSNAME}>{SPAN_TEXT_CLASSNAME}</span>
        </div>
    );
}

const SubmitBtnComponent = (): JSX.Element => {
    return(
        <div className={styles.btn_findpw}>
            <a href='/' className={styles.btn_findpw_submit}>
                <span className={styles.btn_findpw_text}>비밀번호 찾기</span>
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


export default FindPw;
