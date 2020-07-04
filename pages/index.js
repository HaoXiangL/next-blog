import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../component/layout';
import { getSortedPostsData } from '../lib/posts';
import BlogList from '../component/blogList';
import {useState} from 'react'

export default function Home({ allPostsData }) {
  const pids = ['Tech', 'Project', 'Life', 'About'];
  const [currentPath, setCurrentPath] = useState('Tech')
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="flex justify-center my-4 text-lg text-gray-700">
          Web Developer in ShenZhen. Record Life and Technology in Blog.
        </p>
      </section>
      <section>
        {/* NavBar in index */}
        <ul className="flex nav__list-style-none justify-around px-0">
          {pids.map((pid, index) => (
            <li key={index} onClick={() => {
              setCurrentPath(pid);
            }} className="cursor-pointer">
                {pid}
            </li>
          ))}
        </ul>
        {/* 展示blog内容,来源自lib/post的getSortedPostsData获取本地md文件展示 */}
        <BlogList blogData={allPostsData} current={currentPath} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
