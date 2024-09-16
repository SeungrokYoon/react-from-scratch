export default function SidebarPage() {
  return (
    <body>
      <aside className="sidebar">
        <header>
          <img src="/sidebar/logo.svg" alt="sidebar-logo" />
        </header>
        <ul>
          <li>
            <input type="radio" name="sidebar" id="dashboard" />
            <label htmlFor="dashboard">
              <i className="ai-dashboard"></i>
              <p>Dashboard</p>
            </label>
          </li>
          <li>
            <input type="radio" name="sidebar" id="settings" />
            <label htmlFor="settings">
              <i className="ai-gear"></i>
              <p>Dashboard</p>
              <i className="ai-chevron-down-small"></i>
            </label>
            <div className="submenu">
              <ul>
                <li>
                  <button type="button">Display</button>
                </li>
                <li>
                  <button type="button">Appearance</button>
                </li>
                <li>
                  <button type="button">Preferences</button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </aside>
    </body>
  );
}
