import React from 'react';
import { Link } from "react-router-dom";
import '../styles/FindId.scss';

const FindId = () => {
    return(
        <div className='findid'>
            <div className='findid_area'>
                <h1 className='blind'>아이디 찾기</h1>
                <div className='findid_input_area'>
                    <InputBoxComponent inputType='text' />
                    <InputBoxComponent inputType='tel' />
                </div>
                <div className='find_users_area'>
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
    const DIV_CLASSNAME = (inputType === 'text') ? 'form_name_outter' : 'form_phone_outter';
    const INPUT_CLASSNAME = (inputType === 'text') ? 'form_name_inner' : 'form_phone_inner';
    const SPAN_CLASSNAME = (inputType === 'text') ? 'form_name_alert' : 'form_phone_alert';

    const PLACEHOLDER_TEXT_CLASSNAME = (inputType === 'text') ? '이름' : '전화번호';
    const SPAN_TEXT_CLASSNAME = (inputType === 'text') ? '이름을 입력해주세요' : '전화번호를 입력해주세요';

    return(
        <div className={DIV_CLASSNAME}>
            <input type={inputType} placeholder={PLACEHOLDER_TEXT_CLASSNAME} className={INPUT_CLASSNAME}/>
            <span className={SPAN_CLASSNAME}>{SPAN_TEXT_CLASSNAME}</span>
        </div>
    );
}

const SubmitBtnComponent = (): JSX.Element => {
    return(
        <div className='btn_findid'>
            <a href='/' className='btn_findid_submit'>
                <span className='btn_findid_text'>아이디 찾기</span>
            </a>
        </div>
    );
}

const FindUsersComponent = (): JSX.Element => {
    return(
        <ul className='find_users'>
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


export default FindId;
