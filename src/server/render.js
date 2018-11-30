import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import createHistory from 'history/createMemoryHistory'
import App from '../app/pedalroom'
import { getAssets } from './assets'
import configureStore from '../app/configure-store'

const render = ({ clientStats }) => (req, res) => {
  const { scripts, stylesheets } = getAssets(clientStats)

  const history = createHistory()
  const store = configureStore(history)
  const htmlContext = getHtmlContent()

  res.render('index', {
    scriptSources: scripts,
    styleSources: stylesheets,
    publicPath: clientStats.publicPath,
    htmlContext
  })

  function getHtmlContent () {
    return ReactDOMServer.renderToString(<Provider store={store}><StaticRouter location={req.url}>
      <App />
    </StaticRouter></Provider>)
  }
}

export default render
