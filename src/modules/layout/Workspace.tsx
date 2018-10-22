import * as React from 'react';
import styled from 'react-emotion';
import { observer } from 'mobx-react';


const Container = styled('div')({
position: "relative",
display: 'flex',
flexGrow: 1,
flexShrink: 1,
flexBasis: "0%",
flexDirection: "column",
width: "100%",
margin: 1,
overflow: 'hidden'
})


export let MiddlePanel: React.SFC<any> = observer((props) =>
    <Container>
     {props.children}
    </Container>
)

