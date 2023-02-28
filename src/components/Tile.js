import { useState } from 'react'

export default function Tile({ pig }) {
	const [viewDetails, setViewDetails] = useState(false)
	const [hide, setHide] = useState(true)

	function handleClick() {
		setViewDetails(!viewDetails)
	}

  const hideFeature = () => {
    if (!hide) {
    return (
      <div>
        <img src={pig.image} alt={pig.name} />
        <br />
        {viewDetails ? (
          <span>
            Specialty: {pig.specialty} · Weight: {pig.weight} ·{' '}
            {pig.greased ? 'GREASED' : 'NOT GREASED'} · Highest Medal Achieved:{' '}
            {pig['highest medal achieved']}
          </span>
        ) : null}
      </div>
    )
  }}

	function handleHide() {
		setHide(!hide)
	}
	return (
    <div className='pigTile' key={pig.name} onClick={() => handleClick()}>
			<button onClick={() => handleHide()}>
				{hide ? `Show ${pig.name}` : `Hide ${pig.name}`}
			</button>
      {
        hideFeature()
      }
		</div>
	)
}
