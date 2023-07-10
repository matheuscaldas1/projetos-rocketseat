import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import styles from "./Post.module.css"
import { Avatar, Comment } from '../index'

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([
        'Post muito top',
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publisedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const publisehdDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    function handleCreateNewComment(e) {
        e.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(e) {
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value)
    }

    function handleNewCommentInvalid(e) {
        e.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publisedDateFormated}
                    dateTime={publishedAt.toISOString()}
                >
                    {publisehdDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />)
                })}
            </div>
        </article>
    )
}