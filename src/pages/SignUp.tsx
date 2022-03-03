import React from 'react';
import styles from '../styles/SignUp.module.scss';

const SignUp = () => {
    return(
        <div className={styles.signup}>
            <div className={styles.signup_area}>
                <h1 className={styles.blind}>로그인</h1>
                <div className={styles.signup_input_area}>
                    <InputBoxComponent inputType='text' placeholder='이름' />
                    <InputBoxComponent inputType='number' placeholder='생년월일 (6자리)' />
                    <InputBoxComponent inputType='text' />
                    <InputBoxComponent inputType='password' />
                    <InputBoxComponent inputType='password' placeholder='비밀번호 확인' span='비밀번호를 확인해주세요' />
                    <SmallInputBoxComponent inputType='tel' />
                    <SmallInputBoxComponent inputType='number' />
                </div>
                <SubmitBtnComponent />
            </div>
        </div>
    );
}

interface InputBoxProps{
    inputType: string;
    placeholder?: string;
    span?: string;
}

interface SmallBtnProps{
    text: string;
}

const InputBoxComponent = ( {inputType, placeholder, span}: InputBoxProps ): JSX.Element => {
    let PLACEHOLDER_TEXT_CLASSNAME = null;
    let SPAN_TEXT_CLASSNAME = null;

    if(placeholder || span){
        PLACEHOLDER_TEXT_CLASSNAME = placeholder;
        SPAN_TEXT_CLASSNAME = span;
    }else{
        PLACEHOLDER_TEXT_CLASSNAME = (inputType === 'text') ? '아이디' : '비밀번호';
        SPAN_TEXT_CLASSNAME = (inputType === 'text') ? '아이디를 입력해주세요' : '비밀번호를 입력해주세요';
    }

    return(
        <div className={styles.form_input_outter}>
            <input type={inputType} placeholder={PLACEHOLDER_TEXT_CLASSNAME} className={styles.form_input_inner}/>
            <span className={styles.form_input_alert}>{SPAN_TEXT_CLASSNAME}</span>
        </div>
    );
}

const SmallInputBoxComponent = ( {inputType}: InputBoxProps ): JSX.Element => {
    const PLACEHOLDER_TEXT = (inputType === 'tel') ? '전화번호' : '인증번호';
    const SPAN_TEXT = (inputType === 'tel') ? '전화번호를 입력해주세요' : '인증번호를 입력해주세요';
    const SMALL_BTN_TEXT = (inputType === 'tel') ? '인증번호 전송' : '인증번호 확인';

    return(
        <div className={styles.form_small_input_outter}>
            <input type={inputType} placeholder={PLACEHOLDER_TEXT} className={styles.form_small_input_inner}/>
            <span className={styles.form_small_input_alert}>{SPAN_TEXT}</span>
            <SmallBtnComponent text={SMALL_BTN_TEXT} />
        </div>
    );
}

const SmallBtnComponent = ( {text}: SmallBtnProps ): JSX.Element => {
    return(
        <div className={styles.small_btn}>
            {text}
        </div>
    );
}

const SubmitBtnComponent = (): JSX.Element => {
    return(
        <div className={styles.btn_signup}>
            <div  className={styles.btn_signup_submit}>
                <span className={styles.btn_signup_text}>회원가입</span>
            </div>
        </div>
    );
}

export default SignUp;
