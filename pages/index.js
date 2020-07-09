import Head from 'next/head';
import Layout, { siteTitle } from '../component/layout';
import { getSortedPostsData } from '../lib/posts';
import BlogList from '../component/blogList';
import { useState } from 'react';
import classNames from 'classnames';


export default function Home({ allPostsData }) {
  const navBar = ['Tech', 'Project', 'Life', 'About'];
  const [currentPath, setCurrentPath] = useState('Tech');
  const [currentActive, setCurrentActive] = useState(0);
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
          {navBar.map((nav, index) => (
            <li
              key={index}
              onClick={() => {
                setCurrentPath(nav);
                setCurrentActive(index);
              }}
              className={classNames("cursor-pointer","p-4","m-0","text-gray-700",{
                "is-active": currentActive === index
              })}
            >
              {nav}
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
