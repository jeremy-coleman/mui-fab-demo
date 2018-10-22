import * as React from "react"
import IconButton from "@material-ui/core/IconButton"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { observer, inject } from "mobx-react"
import { UiStore } from "../../../stores/UiStore"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import styled from 'react-emotion'

import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"

import { VerticalStretch } from '../../layout/Dimensions';


//@ts-ignore
const FormDrawerDimensions = styled(Card)({
  minWidth: 245,  
  minHeight: "100%",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    alignmentBaseline: "central",
    position: 'relative'
  })



@inject("store")
@observer
export class FormDrawer extends React.Component<any, any> {
  render() {

    const { FormDrawerToggle} = this.props.store.uiStore as UiStore


    const closeDrawer = () => {
      FormDrawerToggle.openDrawer(false)
    }


    const FormDrawer = (
      <FormDrawerDimensions >
        <VerticalStretch>
        <Button onClick={()=> {}}>hi</Button>
        <div style={nodeFormDrawerHeader}>
          <IconButton onClick={closeDrawer}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <div style={formDrawerBlock}>
            {this.props.children}
            <Button variant="contained" color="primary" style={{margin: '8px'}} onClick={closeDrawer}>
              Done
            </Button>
          </div>
          </List>
        </VerticalStretch>
      </FormDrawerDimensions>
    )
    return FormDrawer
  }
}

const formDrawerBlock: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}


const nodeFormDrawerHeader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px"
}