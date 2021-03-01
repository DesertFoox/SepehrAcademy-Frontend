import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { Layout } from "./core/utils/context/Layout"
import * as serviceWorker from "./serviceWorker"
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
import "./index.scss"

const LazyApp = lazy(() => import("./App"))


// configureDatabase()
ReactDOM.render(

      <Suspense fallback={<Spinner />}>
        <Layout>
            <LazyApp />
        </Layout>
      </Suspense>
,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
