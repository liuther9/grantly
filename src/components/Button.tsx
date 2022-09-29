import { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { _BLACK, _PURPLE, _LIGHT_GRAY } from 'styles/variables'

interface Props extends ButtonHTMLAttributes<HTMLElement> {
	children?: ReactNode
	styles: {
		color: string
		border?: string
		textColor?: string
	}
	height?: number
}

type BtnProps = {
	border?: string
	color: string
	height?: number
	textColor?: string
}

const StyledButton = styled.button<BtnProps>`
	width: 100%;
	min-height: ${(p) => (p.height ? p.height + 'px' : '40px')};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(p) => p.color};
	border: 2px solid ${(p) => (p.border ? p.border : p.color)};
	border-radius: 16px;
	cursor: pointer;
	&:disabled {
		background-color: ${_LIGHT_GRAY};
		border: 2px solid ${_LIGHT_GRAY};
		cursor: not-allowed;
	}

	font-size: 14px;
	line-height: 20px;
	color: ${(p) => (p.textColor ? p.textColor : (p.color === _PURPLE || p.color === _BLACK ? '#FFFFFF' : _BLACK))};
`
const Button: React.FC<Props> = (props) => {
	const {
		children,
		height,
		styles: { color, border, textColor },
	} = props
	return (
		<StyledButton color={color} border={border} height={height} textColor={textColor} {...props}>
			{children}
		</StyledButton>
	)
}

export default Button
