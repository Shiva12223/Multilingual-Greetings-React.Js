import {Component} from 'react'

import TabItems from './components/TabItems'
import LanguageGreetings from './components/LanguageGreetings'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredLanguage = () => {
    const {activeTabId} = this.state
    const filteredLanguage = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTabId,
    )

    return filteredLanguage
  }

  render() {
    const {activeTabId} = this.state
    const filteredLanguage = this.getFilteredLanguage()
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="title">Multilingual Greetings</h1>
          <ul className="language-tab-items-container">
            {languageGreetingsList.map(tabItemDetails => (
              <TabItems
                tabItemDetails={tabItemDetails}
                key={tabItemDetails.id}
                clickTabItem={this.clickTabItem}
                isActive={activeTabId === tabItemDetails.id}
              />
            ))}
          </ul>
          {filteredLanguage.map(eachLanguageItem => (
            <LanguageGreetings
              key={eachLanguageItem.id}
              languageItem={eachLanguageItem}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
