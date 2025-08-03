import type { Component } from 'vue'
import type { Locale } from '../../locales/base'

export type Config = {
  locale: Locale
  checkList?: {
    activeIcon?: Component
  }
  collapse?: {
    arrowIcon?: Component | ((active: boolean) => Component)
  }
  dropdown?: {
    arrowIcon?: Component
  }
  form?: {
    helpIcon?: Component
  }
  input?: {
    clearIcon?: Component
  }
  list?: {
    arrowIcon?: Component
  }
  navBar?: {
    backIcon?: Component
  }
  noticeBar?: {
    icon?: Component
    closeIcon?: Component
  }
  popup?: {
    closeIcon?: Component
  }
  result?: {
    successIcon?: Component
    errorIcon?: Component
    infoIcon?: Component
    waitingIcon?: Component
    warningIcon?: Component
  }
  searchBar?: {
    searchIcon?: Component
  }
}

export type ConfigProviderProps = Partial<Config> & {
  children?: any
}
