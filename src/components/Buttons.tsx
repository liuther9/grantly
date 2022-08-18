import { MouseEventHandler, ReactNode } from 'react'
import styled from 'styled-components'
import { _BLACK, _PURPLE, _LIGHT_GRAY } from 'styles/variables'

type Props = {
	children?: ReactNode,
	onClick: (e: any) => void,
	styles: {
		color: string
		border?: string
	},
	disabled?: boolean,
}

type BtnProps = {
	border?: string,
	color: string,
	disabled: boolean,
}

const StyledButton = styled.button<BtnProps>`
	width: 100%;
	min-height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.disabled ? _LIGHT_GRAY : props.color)};
	border: 2px solid ${(props) => (props.disabled ? _LIGHT_GRAY : props.border ? props.border : props.color)};
	border-radius: 16px;

	font-size: 14px;
	line-height: 20px;
	color: ${(props) => (props.color === _PURPLE ? '#FFFFFF' : _BLACK)};
`
const Button: React.FC<Props> = ({ children, styles: { color, border }, onClick, disabled }) => {
	return (
		<StyledButton
			onClick={onClick}
			color={color}
			border={border}
			disabled={disabled || false}
		>
			{children}
		</StyledButton>
	)
}

export default Button
