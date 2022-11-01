import { Trash } from 'phosphor-react'

import { Container } from "./styled";

export function Comment({ comment, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(comment.id)
    }

    function handleCheckTask(){
        this.state = {even:true}
    }

    return (
        <Container>
            
            <p>{comment.content}</p>      
            <input className="checkBox" onClick={handleCheckTask} type="checkbox"/>
            <button onClick={handleDeleteComment} title="Deletar Tarefa">
                <Trash size={24} />
            </button>
            
        </Container>
    )
}
