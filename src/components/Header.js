const Header = () => (
	<div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 mb-12">
		<nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
			<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
				<div className="flex items-center justify-between w-full md:w-auto">
					<a href="/" aria-label="Home" className="flex items-center">
						<img className="h-8 w-auto sm:h-10 rounded-full" src="https://twitter-avatar.now.sh/punctmail" alt="Logo" />
						<span className="font-medium text-lg text-gray-900 pl-2 -ml-2 pr-2 rounded-r-lg bg-white">Punct</span>
					</a>
				</div>
			</div>
		</nav>
	</div>
)

export default Header
