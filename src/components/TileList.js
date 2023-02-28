import Tile from './Tile'

export default function TileList({ pigs }) {
	return pigs.map((pig) => <Tile key={pig.name} pig={pig} />)
}
