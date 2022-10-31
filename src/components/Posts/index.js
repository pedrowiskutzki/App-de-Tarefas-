import { useState } from "react";
import { Comment } from "../Comment";

import { CommentList, Container, Content, Form } from "./styled";

export function Posts({ info }) {
    const [comments, setComments] = useState([
        {
            id: Math.random(),
            content: "Suas Tarefas"
        }
    ])

    const [newCommentTxt, setNewCommentTxt] = useState('');

    function handleNewComment(event) { 
        setNewCommentTxt(event.target.value)
    }


    function handleCreateNewComment(event) { 
        event.preventDefault();

        const NewComment = {
            id: Math.random(),
            content: newCommentTxt,
        }

        setComments([...comments, NewComment]);
        setNewCommentTxt('')

    }
    
    function deleteComment(id) {
        const commentWithoutDeletedOne = comments.filter((comment) => comment.id !== id)

        setComments(commentWithoutDeletedOne);
    }

    return (
        <Container>
            <header>
                <img src={info.author.avatarUrl} />
                <strong>{info.author.name}</strong>
            </header>

            <Content>
                {
                    info.content.map(res => {
                        return (
                            <div key={res.id}>
                                <p></p>
                            </div>
                        )
                    })
                }
            </Content>

            <Form onSubmit={handleCreateNewComment}>
                <strong>Diga sua Tarefa</strong>
                <textarea
                    placeholder="Escreva sua Tarefa"
                    required
                    value={newCommentTxt}
                    onChange={handleNewComment}
                />

                <footer>
                    <button type="submit">Marcar</button>
                </footer>
            </Form>

            <CommentList>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </CommentList>


        </Container>
    )
}