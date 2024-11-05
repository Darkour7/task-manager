import './index.css';

export function Header() {
  return (
    <nav className="header-container">
      <div className="header-title">
        <span>Task Manager</span>
      </div>
      <div className="header-menu">
        <a href='https://github.com/Darkour7/task-manager.git' target='_blank'>GitHub</a>
      </div>
    </nav>
  );
}
