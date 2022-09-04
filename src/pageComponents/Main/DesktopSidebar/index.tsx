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

type Props = {}

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

const DesktopSidebar = (props: Props) => {
	const [category, setCategory] = useState('')
	const [tracker, setTracker] = useState('')

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
						{countries.map((i) => (
							<StyledLi
								key={i.flag}
								chosen={i.title === tracker}
								onClick={() => setTracker(i.title)}
							>
								<Image src={`/flags/${i.flag}.svg`} alt='' width={20} height={14} />
								{i.title}
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

const countries = [
	{
		title: 'Турция',
		flag: 'turkey',
	},
	{
		title: 'Чехия',
		flag: 'czech',
	},
	{
		title: 'Германия',
		flag: 'germany',
	},
	{
		title: 'Великобритания',
		flag: 'uk',
	},
]

export default DesktopSidebar
