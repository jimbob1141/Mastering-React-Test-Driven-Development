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
	beforeEach(() => {
		container = document.createElement('div')
	})
	const render = (component) => ReactDOM.render(component, container)
	it('renders a div with the right ID', () => {
		render(<AppointmentsDayView Appointments={[]} />)
		expect(container.querySelector('div#appointmentsdayView')).not.toBeNull()
	})
})