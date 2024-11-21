function Header() {
	return (
		<header>
			<div className="container">
			<div className="logo">
            <a href="#0" className="logo-link">
              <h4>
                <span className="logo-h">H</span><span className="logo-h">H</span>
              </h4>
            </a>
          </div>

			<nav>
				<ul>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Products</a>
					</li>
					<li>
						<a href="#footer">Services</a>
					</li>
					<li>
						<a href="#footer">Contact</a>
					</li>
				</ul>
			</nav>
			</div>
		</header>
	);
}

export default Header;