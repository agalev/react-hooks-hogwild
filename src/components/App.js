import React, { useState } from 'react'
import Nav from './Nav'
import TileList from './TileList'
import AddForm from './AddForm'

import hogs from '../porkers_data'

function App() {
	const [pigData, setPigData] = useState(hogs)
	const [filteredPigs, setFilteredPigs] = useState(hogs)
	const [sort, setSort] = useState('')

	function handleSearch(e) {
		console.log(e)
		let filteredPigsarray = pigData.filter((pig) =>
			e === false ? true : pig.greased === e
		)
		setFilteredPigs(filteredPigsarray)
	}

	function sortByName(e) {
		setSort(e)
		let NameSort = filteredPigs.sort(function (a, b) {
			let x = a.name.toLowerCase()
			let y = b.name.toLowerCase()
			if (x < y) {
				return -1
			}
			if (x > y) {
				return 1
			}
			return 0
		})
		setFilteredPigs(NameSort)
	}

	function sortByWeight(e) {
		setSort(e)
		let WeightSort = filteredPigs.sort(function (a, b) {
			return a.weight - b.weight
		})
		setFilteredPigs(WeightSort)
	}

	function handleSubmit(e, formData) {
		e.preventDefault()
		console.log(formData)
		const addedPig = [
			...pigData,
			formData
		]
		setPigData(addedPig)
		setFilteredPigs(addedPig)
	}

	return (
		<div className='App'>
			<Nav />
			<label>Only Greased</label>
			<input type='checkbox' onChange={(e) => handleSearch(e.target.checked)} />
			<br />
			<input
				type='radio'
				value='name'
				checked={sort === 'name'}
				onChange={(e) => sortByName(e.target.value)}
				name='name'
			/>
			Sort by Name
			<br />
			<input
				type='radio'
				value='weight'
				checked={sort === 'weight'}
				onChange={(e) => sortByWeight(e.target.value)}
				name='weight'
			/>
			Sort by Weight
			<AddForm handleSubmit={handleSubmit} />
			<hr />
			<TileList pigs={filteredPigs} />
		</div>
	)
}

export default App
