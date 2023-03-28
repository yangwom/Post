import { Header } from './components/Header'
import { Post } from './components/Post'
import avatarYang from './assets/yang.jpg'
import styles from './App.module.css'
import  './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: avatarYang,
      name: 'yang wom',
      role: 'Developer React'
    },
    content: [

      {type: 'paragraph', content: 'fala galera', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. é um projeto React', },
      {type: 'link', content: 'https://www.instagram.com/yang_wom/', },
      ],
     publishedAT: new Date('2022-05-03 20:00:00'), 
  },
  {
    id: 2,
    author: {
      avatarUrl: avatarYang,
      name: 'yang wom',
      role: 'Developer next'
    },
    content: [

      {type: 'paragraph', content: 'fala galera', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. é um projeto React', },
      {type: 'link', content: 'https://www.instagram.com/yang_wom/', },
      ],
     publishedAT: new Date('2022-05-10 20:00:00'), 
  }
]

function App() {
  return (
    <div>
    <Header />
    
    <div className={styles.wrapper}>
       <Sidebar />
      <main>
       {posts.map(post => {
        return (<Post  
         key={post.id} 
         author={post.author}
         content={post.content}
         publishedAT={post.publishedAT}
          />
        )
       })}
      </main>
    </div>
   </div>
  )
}

export default App
