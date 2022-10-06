import type { NextPage } from "next";
import { Layout } from "../components/common/Layout"
import { SEO } from "../components/common/SEO"
import sanity from '../utils/sanity.ts'
import { useState } from 'react';

export async function getStaticProps() {
  const query = `*[_type == "project"] | order(publisheAt desc){
    ...,
    author->,
    techstack[]->
  }
  `
  const projects = await sanity.fetch(query)
  return {
    props: {
      projects
    }
  }
}

interface Props {
  projects: Schema.Project[]
}
const Home: NextPage<Props> = ({ projects }) => {
  const title = 'Projects'
  const description =
    'Find out about all the development projects I have worked on!'
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
      />
    </Layout>
  )
};

export default Home
