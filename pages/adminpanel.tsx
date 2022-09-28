import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { db } from 'src/utils/firebaseConfig'

interface FormElements extends HTMLFormControlsCollection {
	date: HTMLInputElement,
	description: HTMLInputElement,
	duration: HTMLInputElement,
	id: HTMLInputElement,
	live: HTMLInputElement,
	name: HTMLInputElement,
	title: HTMLInputElement,
	url: HTMLInputElement,
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface FormElements1 extends HTMLFormControlsCollection {
	id: HTMLInputElement,
	action: HTMLInputElement,
	title: HTMLInputElement,
	tracker: HTMLInputElement,
	stage: HTMLInputElement,
}

interface FormElement1 extends HTMLFormElement {
  readonly elements: FormElements1
}

const AdminPanel: NextPage = () => {
	const addStage = ( tracker: string, stageNumber: any, val: any) => {
		const docref = doc(db, `trackers/${tracker}/stages/${stageNumber}`)
		setDoc(docref, val)
	}

	const addBtn = (tracker: string, stage:any, btn:any, val:any) => {
		const docref = doc(db, `trackers/${tracker}/stages/${stage}/buttons/${btn}`)
		setDoc(docref, val)
	}

	const handleSubmitBtn = (e: FormEvent<FormElement1>) => {
		e.preventDefault()
		const { id, action, title, tracker, stage } = e.currentTarget.elements
		addBtn(tracker.value, stage.value, id.value, {
			action: action.value,
			title: title.value
		})
	}

	const handleSubmit = (e: FormEvent<FormElement>) => {
		e.preventDefault()
		const { date, description, duration, title, name, id, live, url } = e.currentTarget.elements
		addStage(title.value, id.value, {
			date: Timestamp.fromDate(new Date(date.value)),
			description: description.value,
			duration: duration.valueAsNumber,
			id: id.valueAsNumber,
			live: live.checked,
			name: name.value,
			title: title.value,
			url: url.value,
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>1 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Все об образовании в Чехии (бакалавр, магистратура, языковые курсы)'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={1} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа' defaultValue={'1-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<label htmlFor="live">Лайв?</label>
				<input type='checkbox' name='live' id='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>2 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Study case'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={2} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'2-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>3 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Обзор всех доступных программ, стипендий и грантов для иностранных студентов'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={3} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'3-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>4 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Разбор Стипендии 1'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={4} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'4-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>5 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Разбор Стипендии 2'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={5} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'5-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>6 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Personal stat, мотивационное эссе, сопроводительные письма'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={6} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'6-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>7 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Обзор полезных и необходимых сервисов для поступления'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={7} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'7-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>8 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Созвон с представителями университетов и языковых школ 1'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={8} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'8-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>9 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Созвон с представителями университетов и языковых школ 2'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={9} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'9-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>10 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Топ 10 ошибок поступающих в Чехию - от студента Czech university'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={10} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'10-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>11 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Разбор экзаменов и тестов для поступления'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={11} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'11-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>12 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Обзор на жилье для студентов'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={12} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'12-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>13 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Сбор и подача документов на визу'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={13} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'13-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>14 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Все что нужно взять с собой'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={14} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'14-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>15 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Созвон с тайным гостем'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={15} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'15-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>16 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Топовые университеты и специальности в Чехии'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={16} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'16-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>17 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'День юзера steply - питч от пользователей'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={17} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'17-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>18 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Запуск своих проектов'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={18} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'18-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmit} style={{ marginBottom: 100}}>
				<h1>19 этап</h1>
				<textarea name='description' placeholder='description' defaultValue={'Коллективный созвон всех участников трекера'} />
				<input type='text' name='date' placeholder="November 30, 2022, 13:12" defaultValue={"November 30, 2022, 13:12"} />
				<input type='number' name='duration' placeholder='длительность минуты'defaultValue={123} />
				<input type='number' name='id' placeholder='id этапа'defaultValue={19} />
				<input type='text' name='title' placeholder='страна' defaultValue={'czech'} />
				<input type='text' name='name' placeholder='Название этапа'defaultValue={'19-й этап'} />
				<input type='text' name='url' placeholder='url' defaultValue={'123'} />
				<input type='checkbox' name='live' />
				<button>asdasd</button>
			</form>

			<form onSubmit={handleSubmitBtn}>
				<h1>Создать кнопку</h1>
				<input type='text' name='action' placeholder='action' />
				<input type='text' name='title' placeholder='title' />
				<input type='text' name='id' placeholder='id' />
				<input type='text' name='tracker' placeholder='tracker' />
				<input type='number' name='stage' placeholder='stage' />
				<button>asdasd</button>
			</form>
		</div>
	)
}

export default AdminPanel
