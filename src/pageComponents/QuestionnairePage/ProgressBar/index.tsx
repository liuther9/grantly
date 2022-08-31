import styled from 'styled-components'
import { _GRAY, _LIGHT_GRAY, _PURPLE, _TABLET } from 'styles/variables'

const Progress = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 8px;
	border-radius: 8px;
	background: ${_LIGHT_GRAY};
	span {
		position: absolute;
		left: 0;
		top: 0;
		width: ${(props: { percent: number }) => props.percent + '%'};
		height: 100%;
		border-radius: 8px;
		background-color: ${_PURPLE};
		transition: all 0.1s linear;
	}
	@media (max-width: ${_TABLET}) {
		margin-bottom: 12px;
	}
`

const TopContainer = styled.section`
	position: sticky;
	z-index: 1;
	top: 44px;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: #ffffff;
	padding: 30px 16px 10px;
	margin-bottom: 20px;
	svg {
		font-size: 24px;
	}
`
const PageCount = styled.div`
	width: 100%;
	display: none;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;

	span {
		color: ${_GRAY}
	}
	@media (max-width: ${_TABLET}) {
		display: flex;
	}
`
type Props = { percent: number, count: number, total: number }
const ProgressBar: React.FC<Props> = ({ percent, count, total }) => {
	return (
		<TopContainer>
			<Progress percent={percent}>
				<span></span>
			</Progress>
			<PageCount>{count}/<span>{total}</span></PageCount>
		</TopContainer>
	)
}

export default ProgressBar
