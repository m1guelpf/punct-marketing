import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import fs from 'fs'
import matter from 'gray-matter'
import glob from 'fast-glob'
import Layout from '../../components/Layout'

const BlogPost = ({ mdxSource, frontMatter, slug }) => {
	const content = hydrate(mdxSource)

	return <Layout title={frontMatter.title}>{content}</Layout>
}

const contentGlob = 'src/articles/*.mdx'

export async function getStaticPaths() {
	const files = glob.sync(contentGlob)

	const paths = files.map((file) => {
		const split = file.split('/')
		const filename = split[split.length - 1]
		const slug = filename.replace('.mdx', '')

		return { params: { slug } }
	})

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const files = glob.sync(contentGlob)

	const fullPath = files.filter((item) => {
		const split = item.split('/')
		const filename = split[split.length - 1]
		return filename.replace('.mdx', '') === slug
	})[0]

	const mdxSource = fs.readFileSync(fullPath)
	const { content, data } = matter(mdxSource)

	if (!fullPath) console.warn('No MDX file found for slug')

	const mdx = await renderToString(content, null, null, data)

	return {
		props: {
			mdxSource: mdx,
			frontMatter: data,
			slug,
		},
	}
}

export default BlogPost
