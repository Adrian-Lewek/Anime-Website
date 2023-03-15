import { FunctionComponent } from "react"

interface animeType {
  genre: string
}
const GenreItem: FunctionComponent<animeType> = ({ genre }) => {
  return (
    <div className="genreItem">{genre}</div>
  )
}
export default GenreItem