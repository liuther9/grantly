import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { _GRAY, _LIGHT_GRAY, _LIGHT_GREEN, _PURPLE, _RED } from 'styles/variables'

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 24px;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }
  svg {
    position: absolute;
    left: 25px;
  }
`

const StyledForm = styled.form`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
pre {
  background: #000;
  color: white;
  font-family: monospace;
  padding: 1ch;
}

pre.caret-bar > span {
  animation: blink 1s step-end infinite;
  border-left: 2px solid white;
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

`

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${_LIGHT_GRAY};
  outline: none;
  font-size: 14px;
  line-height: 20px;
  &:focus {
    caret-color: ${_PURPLE};
    color: ${_PURPLE};
    border-bottom: 1px solid ${_PURPLE};
  }
  &::placeholder {
    color: ${_GRAY};
  }
  &[aria-invalid='true'] {
    color: ${_RED};
    border-bottom: 1px solid ${_RED};
  }
  &[aria-checked='true'] {
    color: ${_LIGHT_GREEN};
    border-bottom: 1px solid ${_LIGHT_GREEN};
  }
`

const Error = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: ${_RED};
`

const Auth: NextPage = () => {
  // MAIL INPUT WITH VALIDATION
  const [user, setUser] = useState('')
  const [userError, setUserError] = useState(false)
  const [userSuccess, setUserSuccess] = useState(false)

  const validateEmail = (text: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    return setUserError(!reg.test(text))
  }

  const handleChangeUserName = (text: string) => {
    if (text.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/) != null) {
      setUserError(false)
      setUserSuccess(true)
    } else setUserSuccess(false)

    setUser(text)
  }
  // ---------------------------

  // PASSWORD WITH VALIDATION
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [passError, setPassError] = useState(false)
  const [passSuccess, setPassSuccess] = useState(false)
  const cyrillicPattern = /^[\u0400-\u04FF]+$/

  useEffect(() => {
    const len = password.length
    setPassError(!(password === passwordRepeat) && (passwordRepeat.length !== 0))
    setPassSuccess(len > 7 && password === passwordRepeat)
  }, [password, passwordRepeat])

  return <Fragment>
    <StyledHead>
      <MdKeyboardArrowLeft />
      <h1>Войти в аккаунт</h1>
    </StyledHead>

    <StyledForm>
      <StyledInput
        value={user}
        onChange={e => handleChangeUserName(e.target.value)}
        placeholder='Введите почту'
        onFocus={() => setUserError(false)}
        onBlur={e => validateEmail(e.target.value)}
        aria-checked={userSuccess}
        aria-invalid={userError}
      />
      <StyledInput
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        aria-checked={passSuccess}
        aria-invalid={passError}
      />
      <StyledInput
        type='password'
        value={passwordRepeat}
        onChange={e => setPasswordRepeat(e.target.value)}
        aria-checked={passSuccess}
        aria-invalid={passError}
      />
      { userError && <Error>Введенные пароль или почта неправильные</Error> }
      { passError && <Error>Пароли не совпадают</Error> }
    </StyledForm>
  </Fragment>
}

export default Auth
