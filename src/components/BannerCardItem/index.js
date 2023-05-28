// Write your code here.
import './index.css'

const BannerDetails = props => {
  const {cardContainer} = props
  const {headerText, description} = cardContainer

  return (
    <div>
      <h1>{headerText}</h1>
      <p>{description}</p>
    </div>
  )
}
export default BannerDetails
