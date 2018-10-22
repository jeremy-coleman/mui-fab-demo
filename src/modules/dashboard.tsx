import * as React from "react"

import styled from 'react-emotion';
import { withTheme } from 'theming';
import { observer } from "mobx-react";

//import {lighten} from 'polished'

//import {Theme} from '@material-ui/core/styles'


const Tester = withTheme(styled('div')(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  //color: theme.palette.primaryBackground,
})))



// const MainWorkSpace = withTheme(styled('div')(({theme}) => ({
//   display: "flex",
//   flex: 1,
//   height: "100vh",
//   width: "100%",
//   backgroundColor: theme.palette.primary.main,
// })))


export let DashboardPage = observer((props) =>
<div>
<Tester>
<p>Emotion  Dashboard - this red bit is wrapped in the following component</p>

<code>{`const Tester = withTheme(styled('div')(({theme}) => ({
  backgroundColor: theme.palette.themePrimary,
  color: theme.palette.primaryBackground,
})))`}</code>
<p>Recent Projects</p>

<p>Reports</p>

<p>Feeds</p>

<p>Progress for most recent project</p>
</Tester>
</div>
)
