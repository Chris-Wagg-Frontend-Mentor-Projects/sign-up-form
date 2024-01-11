'use client'
import React, { useState } from 'react'

export default function Home() {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstNameError, setFirstNameError] = useState({})
	const [lastNameError, setLastNameError] = useState({})
	const [emailError, setEmailError] = useState({})
	const [passwordError, setPasswordError] = useState({})

	const validateFirstName = () => {
		let firstNameError = {}

		if (firstName == '') {
			firstNameError.firstName = 'Please enter a first name'
		}
		console.log('missing first name')
		setFirstNameError(firstNameError)
	}
	const validateLastName = () => {
		let lastNameError = {}

		if (lastName == '') {
			lastNameError.lastName = 'Please enter a last name'
		}
		console.log('missing last name')
		setLastNameError(lastNameError)
	}
	const validateEmail = () => {
		let emailError = {}

		if (email == '') {
			emailError.email = 'Please enter an email address'
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			emailError.email = 'Please enter a valid email address. '
		}
		console.log('missing email')
		setEmailError(emailError)
	}
	const validatePassword = () => {
		let passworderror = {}

		if (password == '') {
			passworderror.password = 'Please enter a password'
		}
		console.log('missing password')
		setPasswordError(passworderror)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		validateFirstName()
		validateLastName()
		validateEmail()
		validatePassword()

		if (
			firstName == '' ||
			lastName == '' ||
			email == '' ||
			password == ''
		) {
			console.log(
				'form missing inputs, please fill in the form and try again'
			)
		} else {
			console.log('Form submitted successfully!')
		}
	}

	return (
		<main className='main-wrapper'>
			<section className='left-wrapper'>
				<div className='text-wrapper'>
					<h1> Learn to code by watching others</h1>
					<p>
						See how experienced developers solve problems in
						real-time. Watching scripted tutorials is great, but
						understanding how developers think is invaluable.
					</p>
				</div>
			</section>
			<section className='right-wrapper'>
				<p className='trial-message box-shadow'>
					<span className='bold-text'>Try it free 7</span> days then
					$20/mo.
				</p>
				<form className='box-shadow' action=''>
					<input
						type='text'
						name='first-name'
						placeholder='First name'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}></input>
					{firstNameError.firstName && (
						<p className='error-message'>
							{firstNameError.firstName}
							<svg
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<g fill='none' fill-rule='evenodd'>
									<circle
										fill='#FF7979'
										cx='12'
										cy='12'
										r='12'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='6'
										width='2'
										height='9'
										rx='1'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='17'
										width='2'
										height='2'
										rx='1'
									/>
								</g>
							</svg>
						</p>
					)}
					<input
						type='text'
						name='last-name'
						placeholder='Last name'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}></input>
					{lastNameError.lastName && (
						<p className='error-message'>
							{lastNameError.lastName}
							<svg
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<g fill='none' fill-rule='evenodd'>
									<circle
										fill='#FF7979'
										cx='12'
										cy='12'
										r='12'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='6'
										width='2'
										height='9'
										rx='1'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='17'
										width='2'
										height='2'
										rx='1'
									/>
								</g>
							</svg>
						</p>
					)}
					<input
						type='email'
						name='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>
					{emailError.email && (
						<p className='error-message'>
							{emailError.email}
							<svg
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<g fill='none' fill-rule='evenodd'>
									<circle
										fill='#FF7979'
										cx='12'
										cy='12'
										r='12'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='6'
										width='2'
										height='9'
										rx='1'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='17'
										width='2'
										height='2'
										rx='1'
									/>
								</g>
							</svg>
						</p>
					)}
					<input
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}></input>
					{passwordError.password && (
						<p className='error-message'>
							{passwordError.password}
							<svg
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<g fill='none' fill-rule='evenodd'>
									<circle
										fill='#FF7979'
										cx='12'
										cy='12'
										r='12'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='6'
										width='2'
										height='9'
										rx='1'
									/>
									<rect
										fill='#FFF'
										x='11'
										y='17'
										width='2'
										height='2'
										rx='1'
									/>
								</g>
							</svg>
						</p>
					)}
					<button
						aria-label='Submit button'
						onClick={handleSubmit}
						className='box-shadow'>
						CLAIM YOUR FREE TRIAL
					</button>
					<p>
						By clicking the button, you are agreeing to our{' '}
						<a href='/'>Terms and Services</a>
					</p>
				</form>
			</section>
		</main>
	)
}
