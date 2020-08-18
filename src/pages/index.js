// import Preloader from '../components/Preloader'

import Layout from '../components/Layout'

const Landing = () => {
	return (
		// <Preloader />
		<Layout title="Lorem Ipslum Dolor Sit Amet">
			<p className="z-10 relative">Social networks are great. They are a place for connecting with like-minded individuals and sharing knowledge.</p>
			<p>
				But, in the last few years, they've become a source of{' '}
				<a href="https://www.cjr.org/the_media_today/disinformation-facebook.php" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
					disinformation
				</a>
				,{' '}
				<a href="https://decoders.amnesty.org/projects/troll-patrol/findings" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
					anonymous harassment
				</a>
				,{' '}
				<a href="https://www.washingtonpost.com/technology/2020/01/28/off-facebook-activity-page/" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
					privacy concerns
				</a>
				, and{' '}
				<a href="https://www.psychologytoday.com/intl/blog/digital-world-real-world/202002/anxiety-and-social-media-use" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
					anxiety
				</a>
				, while the platforms focused only on growing their engagement and revenue.
			</p>
			<p className="z-10 relative">
				It's time for a new platform, one that <strong>respects your privacy</strong>, that <strong>doesn't try to get you addicted</strong>, and that <strong>protects you from hate and harassment</strong>. A platform made for users, not for advertisers .
			</p>
			<p>And, while we're at it, let's also include everything we've been asking those other platforms for ages.</p>
			<h2>Meet Auralite.</h2>
			<p>Auralite is a social network built for people, starting with its revenue model. Instead of making money off ads, Auralite is user-funded, ensuring the focus is always on providing the best experience for our users.</p>
			<p>
				With no ads, there's also no need for any tracking or selling of your data. We're the first <strong>privacy-first social network</strong>.
			</p>
			<p>Control is a big element of Auralite. Aside from complete control over your data, you can also choose who can see each post you make or interact with it, from everyone to mutual followers or even a small hand-picked selection.</p>
			<p>
				While we believe this should help prevent harassment, we also require each user to verify their identity before posting to Auralite, deterring abuse, and making our network <strong>more about people and less about profiles</strong>.
			</p>
			<p>
				Auralite is also built to be open and extendable, <strong>embracing open standards</strong> like RSS and webmentions and empowering developers with an <strong>open API</strong> and a <strong>powerful bot platform</strong>.
			</p>
			<p>
				These are just some of the things we've planned for Auralite. If you want to <strong>learn more about what we're building</strong>, <strong>have a voice in the development</strong> on the platform, and <strong>be the first one to get access</strong> when we open the gates, leave your email below.
			</p>
		</Layout>
	)
}

export default Landing
