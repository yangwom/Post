import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import yangFoto from '../assets/yang.jpg'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author
  publishedAT: Date;
  content: Content[];
}

interface Content {
  type: 'paragraph' | 'link' | string;
  content: string;
}


export function Post({ author, publishedAT, content }: PostProps) {
    const [comments, setComments] = useState(["Ola pessoal"])
    const [newCommentText, setNewCommentText] = useState('')

   const publishedFormated = format(publishedAT, " d 'de' LLLL  'as' HH:mm'h'", {
    locale: ptBr
   } )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAT, {
      locale: ptBr,
      addSuffix: true
    })
    
    function handleCreateNewComment(event: FormEvent) {
      event.preventDefault();
    
       setComments((state) => {
        return [...state, newCommentText]
       } )
       setNewCommentText('')
     }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
      event.preventDefault()
      event.target.setCustomValidity('')
      setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
     setComments(() => comments.filter(comment => comment != commentToDelete));
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('campo Obrigatorio!')
    }
    const isNewCommentEmpty = newCommentText.length === 0;
    return(
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
            <Avatar src={yangFoto} alt="yang wom"/>
                <div className={styles.authorInfo}>
                    <strong>Yang Wom Vieira</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title={publishedFormated} dateTime={publishedAT.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>
    <div className={styles.content}>
      {content.map(line => {
      if(line.type === 'paragraph') {
        return <p key={line.content}>{line.content}</p>;
      } else if (line.type === 'link') {
        return <p key={line.content}><a href="#">{line.content}</a></p>
      }
      })}
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
         name="comment"
         placeholder='Deixe um comentario'
         onChange={handleNewCommentChange}
         value={newCommentText}
         onInvalid={handleNewCommentInvalid}
         required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
        </footer>
    </form>

     <div className={styles.commentList}>
      {comments.map(comment => {
        return <Comment comment={comment} onDeleteComment={deleteComment} />
      })}
     </div>
    </article>
    )
}