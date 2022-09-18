import { useState } from 'react'
import Image from 'next/future/image'
import { IoLogoReact } from 'react-icons/io5'
import { RiUser3Line, RiArrowDownSLine, RiWindowLine } from 'react-icons/ri'
import { _LIGHT_GRAY, _GRAY, _PURPLE, _BLACK } from 'styles/variables'
import Tag from 'src/svg/Tag'
import { Header, Nav, StyledBtn, StyledDetails, StyledLi, Wrapper } from './style'
import Link from 'next/link'
import styled from 'styled-components'
import { MdOutlineCopyright } from 'react-icons/md'
import { useAppSelector } from 'store/hooks'

type Props = {
	tracker: string
	setTracker: (i: string) => void
	category: string
	setCategory: React.Dispatch<React.SetStateAction<string>>
}

const StyledLink = styled.span`
	font-size: 14px;
	line-height: 20px;
	color: ${_GRAY};
	margin-bottom: 20px;
	&:last-of-type {
		margin-bottom: 42px;
	}
`

const StyledCopyright = styled.div`
	color: ${_BLACK};
	display: flex;
	align-items: center;
	height: 40px;
	margin-bottom: 64px;
	svg {
		font-size: 13px;
		margin-right: 8px;
	}
	span {
		font-size: 14px;
		line-height: 20px;
	}
`

const DesktopSidebar:React.FC<Props> = ({ tracker, setTracker, category, setCategory }) => {
	const user = useAppSelector(state => state.userSlice)

	return (
		<Wrapper>
			<Header>
				<IoLogoReact />
				<span>Онлайн академия</span>
			</Header>
			<Nav>
				<StyledDetails
					active={category === 'trackers'}
					open={category === 'trackers'}
					onClick={(e) => e.preventDefault()}
				>
					<summary
						id='trackers'
						onClick={(e) =>
							setCategory((prevState) => (prevState === 'trackers' ? '' : 'trackers'))
						}
					>
						<RiUser3Line />
						<span>Мои трекеры</span>
						<RiArrowDownSLine />
					</summary>
					<ul>
						{user.trackers?.map((i) => (
							<StyledLi
								key={i}
								chosen={i === tracker}
								onClick={() => setTracker(i)}
							>
								<Image src={`/flags/${i}.svg`} alt='' width={20} height={14} />
								{i === 'czech' ? 'Чехия' : i === 'turkey' ? 'Турция' : i === 'germany' ? 'Германия' : i === 'uk' ? 'Великобритания' : i === 'usa' ? 'США' : ''}
							</StyledLi>
						))}
					</ul>
				</StyledDetails>
				<StyledBtn
					id='otherTrackers'
					onClick={(e) => setCategory(e.currentTarget.id)}
					selected={category === 'otherTrackers'}
				>
					<RiWindowLine />
					{'Другие трекеры'}
				</StyledBtn>
				<StyledBtn
					id='announcement'
					onClick={(e) => setCategory(e.currentTarget.id)}
					selected={category === 'announcement'}
				>
					<Tag color={category === 'announcement' ? _PURPLE : _BLACK} />
					{'Анонсы'}
				</StyledBtn>
				<Link href={''}>
					<StyledLink>Пол.соглашение</StyledLink>
				</Link>
				<Link href={''}>
					<StyledLink>По всем вопросам</StyledLink>
				</Link>
				<StyledCopyright><MdOutlineCopyright /><span>Grantly Academy</span></StyledCopyright>
			</Nav>
		</Wrapper>
	)
}

export default DesktopSidebar
