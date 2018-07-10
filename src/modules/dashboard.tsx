import * as React from "react"

import styled from 'react-emotion';
import { withTheme } from 'theming';
import { observer } from "mobx-react";

//import {lighten} from 'polished'



const Tester = withTheme(styled('div')(({theme}) => ({
  backgroundColor: theme.palette.themePrimary,
  color: theme.palette.primaryBackground,
})))


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
