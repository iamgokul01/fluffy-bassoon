import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeLanguageId: languageFiltersData[0].id,
  }

  selectFun = id => this.setState({activeLanguageId: id})

  render() {
    const {activeLanguageId} = this.state
    return (
      <div className="main-app-container">
        <h1 className="app-title">Popular</h1>
        <ul className="language-selection-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              isClicked={each.id === activeLanguageId}
              details={each}
              key={each.id}
              selectFun={this.selectFun}
            />
          ))}
        </ul>
        <div className="language-list-container">
          <RepositoryItem activeLanguageId={activeLanguageId} />
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
