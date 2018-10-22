import * as React from 'react'
import when from 'when-switch'
import { style } from 'typestyle'
import { flex, vertical } from 'csstips'
import {NavStore} from './stores/NavStore'
import { observer, inject } from 'mobx-react';

import { NotebookView } from './modules/notebook/View';
import { DatasetsPage, DashboardPage, SettingsPage, AboutPage} from './modules'




interface RouterProps {
  nav?: NavStore
}

const AppRouter = inject('nav')(observer((props: RouterProps) => (
  <div className={style(flex, vertical)}>
    {
      when(props.nav.route)
        .is('notebook', () => <NotebookView />)
        .is('datasets', () => <DatasetsPage />)
        .is('charts', () => <SettingsPage />)
        .is('dashboard', () => <DashboardPage />)
        .is('cloud', () => <SettingsPage />)
        .is('catalog', () => <SettingsPage />)
        .is('settings', () => <SettingsPage />)
        .is('about', () => <AboutPage />)
        .else(() => <NotebookView />)
    }
  </div>
)
))

export default AppRouter

