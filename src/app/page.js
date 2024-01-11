export default function Home() {
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
					Try it free 7 days then $20/mo.
				</p>
				<form className='box-shadow' action=''>
					<input
						type='text'
						name='first-name'
						placeholder='First name'
					/>
					<input
						type='text'
						name='last-name'
						placeholder='Last name'
					/>
					<input
						type='email'
						name='email'
						placeholder='Email address'
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
					/>
					<button className='box-shadow'>
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
