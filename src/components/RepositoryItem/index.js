import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class RepositoryItem extends Component {
  state = {
    isLoading: true,
    activeId: '',
    listData: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {activeLanguageId} = this.props
    console.log(activeLanguageId)
    const apiURL = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`

    const response = await fetch(apiURL)
    const data = await response.json()
    console.log(data)
    this.setState({
      listData: data,
    })
  }

  render() {
    return (
      <div className="lang-card-container">
        <h1>fsefs</h1>
      </div>
    )
  }
}

export default RepositoryItem
