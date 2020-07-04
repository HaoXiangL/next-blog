import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../component/layout';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="my-4 text-lg text-gray-700">
          Web Developer in ShenZhen. Record Life and Technology in Blog.
        </p>
      </section>
      <section>
        {/* NavBar in index */}
        {/* <ul className="flex nav__list-style-none justify-around">
          <li>
            <button onClick={()=> {nav = 'tech';console.log(nav);}}>Tech</button>
          </li>
          <li>Project</li>
          <li>Life</li>
          <li>
          <button onClick={()=>{nav = 'about';console.log(nav);}}>About</button>   
          </li>
        </ul> */}
        {/* 展示blog内容,来源自lib/post的getSortedPostsData获取本地md文件展示 */}
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-5" key={id}>
              <Link href="posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-gray-700">{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
