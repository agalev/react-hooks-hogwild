import { useState } from 'react'
export default function AddForm({ handleSubmit }) {
	const [formData, setFormData] = useState({
		name: '',
		specialty: '',
		greased: false,
		weight: 0,
		'highest medal achieved': '',
    image: ''
	})

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	return (
		<form style={{ border: '1px solid black' }} onSubmit={(e) => handleSubmit(e, formData)}>
			<label>Pig Name:</label>
			<input
				type='text'
				placeholder='Name . . .'
				name='name'
				value={formData.name}
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<label>Specialty:</label>
			<input
				type='text'
				placeholder='Specialty . . .'
				name='specialty'
				value={formData.specialty}
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<label>Greased?:</label>
			<input
				type='checkbox'
				name='greased'
				checked={formData.greased}
				onChange={(e) => {
					setFormData({
						...formData,
						[e.target.name]: formData.greased ? false : true
					})
				}}
			/>
			<br />
			<label>Weight:</label>
			<input
				type='text'
				placeholder='Weight . . .'
				name='weight'
				value={formData.weight}
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<label>Highest medal achieved:</label>
			<br />
			diamond
			<input
				type='radio'
				value='diamond'
				checked={formData['highest medal achieved'] === 'diamond'}
				name='highest medal achieved'
        onChange={(e) => {
					setFormData({
						...formData,
						[e.target.name]: e.target.value
					})
				}}
			/>
			<br />
			platinum
			<input
				type='radio'
				value='platinum'
				checked={formData['highest medal achieved'] === 'platinum'}
				name='highest medal achieved'
        onChange={(e) => {
					setFormData({
						...formData,
						[e.target.name]: e.target.value
					})
				}}
			/>
			<br />
			gold
			<input
				type='radio'
				value='gold'
				checked={formData['highest medal achieved'] === 'gold'}
				name='highest medal achieved'
        onChange={(e) => {
					setFormData({
						...formData,
						[e.target.name]: e.target.value
					})
				}}
			/>
			<br />
			silver
			<input
				type='radio'
				value='silver'
				checked={formData['highest medal achieved'] === 'silver'}
				name='highest medal achieved'
        onChange={(e) => {
					setFormData({
						...formData,
						[e.target.name]: e.target.value
					})
				}}
			/>
			<br />
			bronze
			<input
				type='radio'
				value='bronze'
				checked={formData['highest medal achieved'] === 'bronze'}
				name='highest medal achieved'
        onChange={(e) => {
					setFormData({
						...formData,
						[e.target.name]: e.target.value
					})
				}}
			/>
			<br />
			wood
			<input
				type='radio'
				value='wood'
				checked={formData['highest medal achieved'] === 'wood'}
				name='highest medal achieved'
        onChange={(e) => {
					setFormData({
						...formData,
						[e.target.name]: e.target.value
					})
				}}
			/>
      <br />
			<label>Image:</label>
			<input
				type='text'
				placeholder='Image . . .'
				name='image'
				value={formData.image}
				onChange={(e) => handleChange(e)}
			/>
			<button>Submit</button>
		</form>
	)
}
