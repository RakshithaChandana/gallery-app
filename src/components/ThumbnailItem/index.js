// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageItem, imageChange, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImageItem
  const thumbnailClassName = isActive ? 'thumbnail' : 'thumbnail-image'
  const onClickChange = () => {
    imageChange(id)
  }
  return (
    <li className="thumbnail-images-container">
      <button type="button" className="button" onClick={onClickChange}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
