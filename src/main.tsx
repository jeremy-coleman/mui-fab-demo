import * as React from 'react'
import {mergeStyleSets} from 'office-ui-fabric-react'

const getClassNames = () => mergeStyleSets({
    root:{
        backgroundblack:'black',
        display: 'flex',
        alsignItems: 'center',
        justifyContent: 'center',
        fontSize: '58px'
    }
})

export let AppView = (props) =>
<div style={{height: '100vh', width: '100vw', overflow: 'hidden'}}>
<div className={getClassNames().root}>hi</div>
</div>