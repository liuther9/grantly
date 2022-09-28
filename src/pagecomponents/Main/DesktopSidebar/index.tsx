import Image from 'next/future/image'
import Link from 'next/link'
import { RiUser3Line, RiArrowDownSLine } from 'react-icons/ri'
import { MdOutlineCopyright } from 'react-icons/md'
import Tag from 'src/svg/Tag'
import { useAppSelector } from 'store/hooks'
import LogoComponent from 'components/LogoComponent'
import { Header, Nav, StyledBtn, StyledDetails, StyledLi, Wrapper, StyledCopyright, StyledLink } from './style'
import { _PURPLE, _BLACK } from 'styles/variables'
import RankCard from './RankCard'

type Props = {
	tracker: string
	setTracker: (i: string) => void
	category: string
	setCategory: React.Dispatch<React.SetStateAction<string>>
}

const DesktopSidebar: React.FC<Props> = ({ tracker, setTracker, category, setCategory }) => {
	const trackers = useAppSelector(state => state.trackersSlice.trackers)

	return (
		<Wrapper>
			<Header>
				<LogoComponent />
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
						{trackers.map((i) => (
							<StyledLi
								key={i.title}
								chosen={i.title === tracker}
								onClick={() => setTracker(i.title)}
							>
								<Image src={`/flags/${i.title}.svg`} alt='' width={20} height={14} />
								{i.name}
							</StyledLi>
						))}
					</ul>
				</StyledDetails>
				{/* <StyledBtn
					id='otherTrackers'
					onClick={(e) => setCategory(e.currentTarget.id)}
					selected={category === 'otherTrackers'}
				>
					<RiWindowLine />
					{'Другие трекеры'}
				</StyledBtn> */}
				<StyledBtn
					id='announcement'
					onClick={(e) => setCategory(e.currentTarget.id)}
					selected={category === 'announcement'}
				>
					<Tag color={category === 'announcement' ? _PURPLE : _BLACK} />
					{'Анонсы'}
				</StyledBtn>
				<RankCard />
				<Link href={''}>
					<StyledLink>Пол.соглашение</StyledLink>
				</Link>
				<Link href={''}>
					<StyledLink>По всем вопросам</StyledLink>
				</Link>
				<StyledCopyright><MdOutlineCopyright /><span>Steply Academy</span></StyledCopyright>
			</Nav>
		</Wrapper>
	)
}

export default DesktopSidebar
