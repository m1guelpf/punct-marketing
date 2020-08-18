import Header from './Header'
import CallToAction from './CallToAction'

const Layout = ({ title, children }) => (
	<div className="w-full relative overflow-hidden">
		<div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
			<div className="relative h-full max-w-screen-xl mx-auto">
				<svg className="absolute right-full transform translate-y-1/4 -translate-x-1/4 md:translate-x-1/4 xl:-translate-x-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
					<defs>
						<pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" className="text-gray-800" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
				</svg>
				<svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
					<defs>
						<pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" className="text-gray-800" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
				</svg>
			</div>
		</div>
		<div className="relative pt-6 flex flex-col min-h-screen">
			<Header />

			<main className="w-full flex-1 px-4 md:px-0 mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-dark pb-24">
				<h1 className="tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">{title}</h1>
				{children}
			</main>

			<CallToAction />
		</div>
	</div>
)

export default Layout
