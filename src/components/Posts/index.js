import { useState } from "react";
import { Comment } from "../Comment";

import { CommentList, Container, Form } from "./styled";

export function Posts({ info }) {
    const [comments, setComments] = useState([
        {
            id: Math.random(),
            content: "Suas Tarefas",
            done:false,
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
            done:false,
            
        }

        setComments([...comments, NewComment]);
        setNewCommentTxt('')
    }
    
    function deleteComment(id) {
        const commentWithoutDeletedOne = comments.filter((comment) => comment.id !== id)

        setComments(commentWithoutDeletedOne);
    }

    function doneComment(id) {
        const doneCommentTask= comments.map((comment) => 
        comment.id === id ? { ...comment, done: !comment.done} : comment
       ); 
        setComments(doneCommentTask);
        console.log(comments)
    }

    return (
        <Container>
            
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
                            onDoneComment={doneComment}
                        />
                    )
                })}
            </CommentList>


        </Container>
    )
}