import React from 'react'

const appointmentTimeOfDay = startsAt => {
	const [h, m] = new Date(startsAt).toTimeString().split(':') 
	return `${h}:${m}`
}

export const Appointment = ({ customer }) => (
	<div>{customer.firstName}</div>
	)

export const AppointmentsDayView = ({ appointments }) => (
	<div id="appointmentsDayView">
		<ol>
			{appointments.map(appointment => (
				<li key={appointment.customer.firstName}>
				<button type="button">
				{appointmentTimeOfDay(appointment.startsAt)}
				</button>
				</li>
			))}
		</ol>
		{appointments.length === 0 ? (
			<p>'there are no appointments today'</p>
		) : (
			<Appointment {...appointments[0]} />
		)}
	</div>
	)

