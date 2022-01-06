import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Emails'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [search, setSearch] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  filteredEmails = filteredEmails.filter(function (email) {
    return email.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">

      <Header setSearch={setSearch} />

      <Nav setCurrentTab={setCurrentTab} currentTab={currentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} setHideRead={setHideRead} />

      <Main filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} />

    </div>
  )
}

export default App
