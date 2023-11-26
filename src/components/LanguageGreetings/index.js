import './index.css'

const LanguageGreetings = props => {
  const {languageItem} = props
  const {imageUrl, imageAltText} = languageItem
  return (
    <>
      <div className="img-container">
        <img src={imageUrl} alt={imageAltText} className="greeting-img" />
      </div>
    </>
  )
}

export default LanguageGreetings
