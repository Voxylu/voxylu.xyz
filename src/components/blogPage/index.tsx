import * as React from 'react'

import { Link } from '../link'

import styles from './blogPage.module.scss'
import { BlogBar } from '../blogBar'

interface PostPreviewProps {
  title: string
  date: string
  description: string
  slug: string
}

const PostPreview = ({ title, description, slug, date }: PostPreviewProps) => (
  <div className={styles.post}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.date}>{date}</p>
    <p className={styles.description}>{description}</p>
    <Link to={slug} className={styles.link}>
      Continue reading
    </Link>
  </div>
)

interface BlogPageProps {
  posts: {
    node: {
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        date: string
      }
    }
  }[]
}

export const BlogPage = ({ posts }: BlogPageProps) => {
  const Posts = posts.map((post) => (
    <PostPreview
      key={post.node.fields.slug}
      slug={post.node.fields.slug}
      description={post.node.excerpt}
      date={post.node.frontmatter.date}
      title={post.node.frontmatter.title}
    />
  ))

  return (
    <BlogBar breadcrumb={['Blog']}>
      <div className={styles.posts}>{Posts}</div>
    </BlogBar>
  )
}
