import './index.css'

const TabItems = props => {
  const {tabItemDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabItemDetails

  const changeLanguageBtn = () => {
    clickTabItem(id)
  }

  const btnBgColor = isActive ? 'active-btn' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`normal-btn  ${btnBgColor}`}
        onClick={changeLanguageBtn}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItems
