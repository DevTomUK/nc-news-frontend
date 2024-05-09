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

function App() {

  const [topicsList, setTopicsList] = useState([])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/?topic" element={<Article />} />
        <Route path="/topics/" element={<TopicsList topicsList={topicsList} setTopicsList={setTopicsList} />} />
        <Route path="/topics/:topic" element={<><TopicTabs topicsList={topicsList} setTopicsList={setTopicsList} /><ArticlesByTopic /></>} />
      </Routes>
    </>
  )
}

export default App
