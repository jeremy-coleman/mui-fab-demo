import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import FormatAlignRight from "@material-ui/icons/FormatAlignRight";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import { inject, observer } from "mobx-react";
import * as React from "react";
import { UiStore } from "../../stores/UiStore";

import styled from 'react-emotion'


import {withTheme} from 'theming'


const RightControlBarDimensions = withTheme(styled('div')(({theme}) => ({
  maxWidth: 48,
  minWidth: 48,
  width: 48,
  minHeight: "100%",
  flex: "1 1 auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignmentBaseline: "central",
  overflow: "hidden",
  border: "3px solid white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08)",
  backgroundColor: 'white',
  color: theme.palette.primary.main
})))

//  backgroundColor: theme.palette.primary.main,
//  color: theme.palette.primary.contrastText


@inject("store")
@observer
export class NotebookControlBar extends React.Component<any, any> {


  render() { 
    const {DrawerToggle} = this.props.store.uiStore as UiStore

  
    return(
      <RightControlBarDimensions>
            <IconButton onClick={() => DrawerToggle.toggleDrawer()} color="inherit">
              {DrawerToggle.open ? <CloseIcon/> : <FormatAlignRight />}
            </IconButton>

            <IconButton onClick={() => {alert('gg no re')}} color="inherit">
              <PlayCircleFilled />
            </IconButton>
      </RightControlBarDimensions>      
  
    )
  }
}
