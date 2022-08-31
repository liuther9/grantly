import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
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
const StyledRadio = styled.label`
	cursor: pointer;
	display: inline-block;
	position: relative;
	white-space: nowrap;
	font-size: 14px;
	line-height: 20px;
	padding-left: 16px;

	span {
		margin-left: 8px;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		color: #f5f5f5;
		text-align: center;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		width: 12px;
		height: 12px;
		border-radius: 16px;
		overflow: hidden;
		background-color: transparent;
	}
	&::after {
		width: 8px;
		height: 8px;
		left: 4px;
	}

	&::before {
		border: 2px solid #7381ff;
	}
`

const HiddenInput = styled.input`
	position: absolute;
	top: 0;
	display: inline-block;
	opacity: 0;
	margin: 0;
	&:checked {
		& + label::after {
			background-color: ${_PURPLE};
		}
	}
`

const Naming = styled.span``

interface Props extends InputHTMLAttributes<HTMLElement> {
	title: string,
	value: string,
}

const Radio: React.FC<Props> = ({ title, value, ...props }) => {
	return (
		<Wrapper>
			<HiddenInput
				type={'radio'}
				id={value}
				{...props}
			/>
			<StyledRadio htmlFor={value}>
				<Naming>{title}</Naming>
			</StyledRadio>
		</Wrapper>
	)
}

export default Radio
