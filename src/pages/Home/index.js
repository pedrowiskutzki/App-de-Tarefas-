import { Posts } from "../../components/Posts"
import { postArray } from "../../utils/post";

import { Container, Content } from "./styled";

export function Home() {
    console.log(postArray.length);

    return(
        <Container>
            <h1>Tarefas</h1>
            <Content>
                {postArray.map(post => {
                    return(
                        <Posts key={post.id} info={post} />                 
                    )
                })}
            </Content>
        </Container>
    )
}