import Styles from './Comment.module.css'
import yangImg from '../assets/yang.jpg'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'


type CommentProps = {
    comment: string,
    onDeleteComment: (comment: string) => void,
}


export function Comment({ comment, onDeleteComment }: CommentProps) {
const [like, setLike] = useState(0)


  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
   setLike(like + 1);
  }

    return(
        <div className={Styles.comment}>
            <Avatar hasBorder={false} src={yangImg} alt="perfil" />

            <div className={Styles.commentBox}>
                <div className={Styles.commentContent}>
                    <header>
                         <div className={Styles.authorAndTime}>
                         <strong>Yang Wom Vieira</strong>
                         <time title='18 de Março a 08:13h' dateTime='2023-03-2023 15:28:00' ></time>
                         </div>
                        <button onClick={handleDeleteComment} className={Styles.button} title='Deletar comentario'>
                             <Trash size={20} />
                        </button>
                    </header>
                   <p>{comment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{like}</span>
                    </button>
                </footer>
            </div>
        </div>
         )
}