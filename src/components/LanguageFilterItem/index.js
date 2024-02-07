import './index.css'

const LanguageFilterItem = props => {
  const {details, isClicked, selectFun} = props
  const {language, id} = details

  const btnClicked = () => selectFun(id)

  return (
    <li className="language-list-container">
      <button
        className={isClicked ? 'language-clicked-btn' : 'language-select-btn'}
        type="button"
        onClick={btnClicked}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
