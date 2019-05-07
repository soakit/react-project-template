import React from 'react'
import { NavLink, HashRouter } from 'react-router-dom'

export default () => (
  <nav className="mod-nav">
    <HashRouter>
      <NavLink to="/" exact replace>
        首页
      </NavLink>
    </HashRouter>
    <HashRouter>
      <NavLink to="/contacts" replace>
        联系人管理
      </NavLink>
    </HashRouter>
  </nav>
)
