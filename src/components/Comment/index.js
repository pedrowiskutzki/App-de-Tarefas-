import { Trash } from 'phosphor-react'

import { Container } from "./styled";

export function Comment({ comment, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(comment.id)
    }

    return (
        <Container>
            <p>{comment.content}</p>
            <button onClick={handleDeleteComment} title="Deletar Tarefa">
                <Trash size={24} />
            </button>
        </Container>
    )
}