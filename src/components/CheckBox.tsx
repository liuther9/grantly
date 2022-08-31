import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { BsCheck } from 'react-icons/bs'
import { _PURPLE } from 'styles/variables'

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	&:last-of-type {
		margin-bottom: 0;
	}
`

const HiddenInput = styled.input`
	position: absolute;
	top: 0;
	opacity: 0;

	&:checked {
		& + label {
			svg {
				visibility: visible;
			}
		}
	}
`

const Label = styled.label`
	position: relative;
	cursor: pointer;
	display: inline-block;
	white-space: nowrap;
	font-size: 14px;
	line-height: 20px;
	padding-left: 16px;

	&::before {
		content: '';
		position: absolute;
		background-color: transparent;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		width: 12px;
		height: 12px;
	}

	&::before {
		border: 2px solid ${_PURPLE};
		border-radius: 4px;
	}

	svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: -2px;
		font-size: 20px;
		visibility: hidden;
		color: ${_PURPLE};
	}

	span {
		margin-left: 8px;
	}
`

const Naming = styled.span``

interface Props extends InputHTMLAttributes<HTMLElement> {
	
	value: string
}

const CheckBox: React.FC<Props> = ({ value, ...props }) => {
	return (
		<Wrapper>
			<HiddenInput type='checkbox' id={value} {...props} />
			<Label htmlFor={value}>
				<BsCheck />
				<Naming>{value}</Naming>
			</Label>
		</Wrapper>
	)
}

export default CheckBox
