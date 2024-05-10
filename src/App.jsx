import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import Article from './components/Article'
import CommentCard from './components/Comments'
import TopicsList from './components/TopicsList'
import TopicTabs from './components/TopicTabs'
import ArticlesByTopic from './components/ArticlesByTopic'
import NotFound from './components/NotFound'
import UserContext from './contexts/UserContext'

function App() {

  const [user, setUser] = useState(null)
  const login = () => {
    setUser("jessjelly")
  }
  const logout = () => {
    setUser(null)
  }
  const [topicsList, setTopicsList] = useState([])

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/?topic" element={<Article />} />
        <Route path="/topics/" element={<TopicsList topicsList={topicsList} setTopicsList={setTopicsList} />} />
        <Route path="/topics/:topic" element={<><TopicTabs topicsList={topicsList} setTopicsList={setTopicsList} /><ArticlesByTopic /></>} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
