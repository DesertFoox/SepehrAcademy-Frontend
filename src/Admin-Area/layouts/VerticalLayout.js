import React, { PureComponent } from "react"
import classnames from "classnames"
import Sidebar from "./components/menu/vertical-menu/Sidebar"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Config from "../configs/themeConfig"


class VerticalLayout extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      width: window.innerWidth,
      sidebarState: Config.sidebarCollapsed,         //*
      layout: Config.theme,                          //*
      collapsedContent: Config.sidebarCollapsed,     //*
      sidebarHidden: false,
      currentLang: "en",
      appOverlay: false,
      customizer: false,
      currRoute: this.props.location.pathname
    }
  }


  collapsedPaths = []
  mounted = false
  updateWidth = () => {
    if (this.mounted) {
      this.setState(prevState => ({
        width: window.innerWidth
      }))
    }
  }

  handleCustomizer = bool => {
    this.setState({
      customizer: bool
    })
  }

  componentDidMount() {
 
    this.mounted = true
    let {
      location: { pathname }          //*
    } = this.props

    if (this.mounted) {
      if (window !== "undefined") {
        window.addEventListener("resize", this.updateWidth, false)
      }
      if (this.collapsedPaths.includes(pathname)) {
        this.props.collapseSidebar(true)
      }

      let layout = Config.theme       //*
      let dir = Config.direction      //*
      if (dir === "rtl")
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl")
      else document.getElementsByTagName("html")[0].setAttribute("dir", "ltr")
      return layout === "dark"
        ? document.body.classList.add("dark-layout")
        : layout === "semi-dark"
        ? document.body.classList.add("semi-dark-layout")
        : null
    }
  }

  handleCollapsedMenuPaths = item => {
    let collapsedPaths = this.collapsedPaths
    if (!collapsedPaths.includes(item)) {
      collapsedPaths.push(item)
      this.collapsedPaths = collapsedPaths
    }
  }

  toggleSidebarMenu = val => {
    this.setState({
      sidebarState: !this.state.sidebarState,
      collapsedContent: !this.state.collapsedContent
    })
  }

  sidebarMenuHover = val => {
    this.setState({
      sidebarState: val
    })
  }

  handleSidebarVisibility = () => {
    if (this.mounted) {
      if (window !== undefined) {
        window.addEventListener("resize", () => {
          if (this.state.sidebarHidden) {
            this.setState({
              sidebarHidden: !this.state.sidebarHidden
            })
          }
        })
      }
      this.setState({
        sidebarHidden: !this.state.sidebarHidden
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  handleCurrentLanguage = lang => {
    this.setState({
      currentLang: lang
    })
  }

  handleAppOverlay = value => {
    if (value.length > 0) {
      this.setState({
        appOverlay: true
      })
    } else if (value.length < 0 || value === "") {
      this.setState({
        appOverlay: false
      })
    }
  }

  handleAppOverlayClick = () => {
    this.setState({
      appOverlay: false
    })
  }

  render() {
    let menuThemeArr = [
      "primary",
      "success",
      "danger",
      "info",
      "warning",
      "dark"
    ]
    let sidebarProps = {
      toggleSidebarMenu: () => {},
      toggle: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      sidebarHover: this.sidebarMenuHover,
      sidebarVisibility: this.handleSidebarVisibility,
      visibilityState: this.state.sidebarHidden,
      activePath: this.props.match.path,
      collapsedMenuPaths: this.handleCollapsedMenuPaths,
      currentLang: this.state.currentLang,
      activeTheme: Config.menuTheme,                //*
      collapsed: this.state.collapsedContent,
      permission: this.props.permission,
      deviceWidth: this.state.width
    }
    let navbarProps = {
      toggleSidebarMenu: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      sidebarVisibility: this.handleSidebarVisibility,
      currentLang: this.state.currentLang,
      changeCurrentLang: this.handleCurrentLanguage,
      handleAppOverlay: this.handleAppOverlay,
      appOverlayState: this.state.appOverlay,
      navbarColor: Config.navbarColor,              //*
      navbarType: Config.navbarType                 //*
    }

    let footerProps = {
      footerType: Config.footerType,                         //*
      hideScrollToTop: Config.hideScrollToTop                //*
    }


    return (
      <div
        className={classnames(
          `wrapper vertical-layout theme-primary`,//*
          {
            "menu-collapsed":
              this.state.collapsedContent === true && this.state.width >= 1200,
            "fixed-footer": "floating" === "sticky",//*
            "navbar-static": "floating" === "static",//*
            "navbar-sticky": "floating" === "sticky",//*
            "navbar-floating": "floating" === "floating",//*
            "navbar-hidden": "floating" === "hidden",//*
            "theme-primary": !menuThemeArr.includes("primary")//*
          }
        )}>
        <Sidebar {...sidebarProps} />
        <div
          className={classnames("app-content content", {
            "show-overlay": this.state.appOverlay === true
          })}
          onClick={this.handleAppOverlayClick}>
          <Navbar {...navbarProps} />
          <div className="content-wrapper">{this.props.children}</div>
        </div>

        <Footer {...footerProps} />

        <div
          className="sidenav-overlay"
          onClick={this.handleSidebarVisibility}
        />
      </div>
    )
  }
}

export default VerticalLayout;