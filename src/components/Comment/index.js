import { Trash } from 'phosphor-react'

import { Container } from "./styled";

export function Comment({ comment, onDeleteComment, onDoneComment }) {

    function handleDeleteComment() {
        onDeleteComment(comment.id)
    }

    function handleCheckTask() {
        onDoneComment(comment.id)
    }

    return (
        <Container isDone={comment.done}>
            <input class="checkBox" onClick={handleCheckTask} type="checkbox" />
            <p>{comment.content}</p>

            <button onClick={handleDeleteComment} title="Deletar Tarefa">
                <Trash size={24} />
            </button>


        </Container>
    )
}
