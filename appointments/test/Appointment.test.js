import React from 'react'
import ReactDOM from 'react-dom'
import { Appointment, AppointmentsDayView } from '../src/Appointment'



describe('Appointment', () => {
	let container
	let customer
	beforeEach(() => {
	container = document.createElement('div')
	})
	const render = component => ReactDOM.render(component, container)

	it('renders the customer first name', () => {
		customer = { firstName: 'Ashley' }
		render(<Appointment customer={customer} />)
		expect(container.textContent).toMatch("Ashley")
	})
		it('renders another customers first name', () => {
		customer = { firstName: 'Jordan' }
		render(<Appointment customer={customer} />)
		expect(container.textContent).toMatch('Jordan')
	})

})
describe('AppointmentsDayView', () => {
	let container
	let appointments
	let today

	beforeEach(() => {
		container = document.createElement('div')
		today = new Date()
		appointments = [
		{ startsAt: today.setHours(12, 0),
		  customer: {firstName: 'Ashley'} },
		{ startsAt: today.setHours(13, 0),
		  customer: {firstName: 'Jordan'} },
		{ startsAt: today.setHours(14, 0), 
		  customer: {firstName: 'tessa'} }

		]

	})
	const render = (component) => ReactDOM.render(component, container)

	it('renders a div with the right ID', () => {
		render(<AppointmentsDayView appointments={appointments} />)
		expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
	})
	it('renders multiple appointments in an ol element', () => {

		render(<AppointmentsDayView appointments={appointments} />)
		expect(container.querySelector('ol')).not.toBeNull()
		expect(container.querySelector('ol').children).toHaveLength(3)
	})
	it('renders each appointment in an li', () => {
		render(<AppointmentsDayView appointments={appointments} />)
		expect(container.querySelectorAll('li')).toHaveLength(3)
		expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
		expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')
	})
	it('initially shows a message that there are no appointments today', () => {
		render(<AppointmentsDayView appointments={[]} />)
		expect(container.textContent).toMatch('there are no appointments today')
	})
	it('selects the first appointment by default', () => {
		render(<AppointmentsDayView appointments={appointments} />)
		expect(container.textContent).toMatch('Ashley')
	})
	it('has a button element in each li', () => {
		render(<AppointmentsDayView appointments={appointments} />)
		expect(container.querySelectorAll('li > button')).toHaveLength(3)
		expect(container.querySelectorAll('li > button')[0].type).toEqual('button')
		})
})