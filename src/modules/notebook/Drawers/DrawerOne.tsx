import * as React from "react"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

import { observer, inject } from "mobx-react"
import { UiStore } from "../../../stores/UiStore"

import {Card }from "@material-ui/core"
import styled from 'react-emotion'

import { VerticalStretch } from '../../../common/components';

//@ts-ignore
const DrawerDimensions = styled(Card)({
    maxWidth: 180,
    width: '180px',
    minHeight: "100%",
    flex: "1 1 auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignmentBaseline: "central",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08)",
  })

let headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
}

@inject('store')
@observer
export class Drawer extends React.Component<any, any> {
  render() {
    const { DrawerToggle } = this.props.store.uiStore as UiStore
    const Drawer = (
      <DrawerDimensions>
        <VerticalStretch>
        <div style={headerStyles}>
          <IconButton onClick={() => DrawerToggle.openDrawer(false)}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>{this.props.children}</div>
        </List>
        </VerticalStretch>
      </DrawerDimensions>
    )
    return Drawer
  }
}

