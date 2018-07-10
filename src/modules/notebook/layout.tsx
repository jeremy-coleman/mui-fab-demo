import * as React from "react"
import { observer, inject } from "mobx-react"

import { NotebookControlBar } from "./controlbar"
import { FillFlex, Row, VerticalStretch, FillParent } from '../../common/components';




import {withTheme} from 'theming'
import styled from 'react-emotion'
import { Drawer } from "./Drawers/DrawerOne"
import { FormDrawer } from './Drawers/DrawerTwo';
import { UiStore } from '../../stores/UiStore';



const MainWorkSpace = withTheme(styled('div')(({theme}) => ({
  display: "flex",
  flex: 1,
  height: "100vh",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
})))



@inject("store")
@observer
export class NotebookLayout extends React.Component<any, any> {

  render() {
    const {FormDrawerToggle, DrawerToggle} = this.props.store.uiStore as UiStore
    const drawerOne = (
      <Drawer>
      </Drawer>
    )

    const drawerTwo = (
      <FormDrawer/>
    )

return (
  <FillParent>
<FillFlex>         
        <Row>      
            <VerticalStretch>
            <Row>     
            <Row>
            <MainWorkSpace>
                {this.props.children}
                <div></div>
            </MainWorkSpace>
            </Row>
            <div style={{width: FormDrawerToggle.open ? 'auto' : 0}}>{FormDrawer}</div>
            <div style={{width: DrawerToggle.open  ? 180 : 0}}>{Drawer}</div>
            <NotebookControlBar/>
            </Row>
            </VerticalStretch>
        </Row>
        </FillFlex>
      </FillParent>
      
    )
  }
}

