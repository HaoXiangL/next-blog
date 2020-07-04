import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Neo Holk';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }) => {
  return (
    <div className="max-w-xl px-4 py-0 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className="flex justify-center">
              <img
                src="/images/profile.jpg"
                className="w-32 h-32 rounded-full"
                alt={name}
              />
            </div>
            <h1 className="flex justify-center text-xl">{name}</h1>
          </>
        ) : null
        // (
        //   <>
        //     <Link href="/">
        //       <a>
        //         <img
        //           src="/images/profile.jpg"
        //           className="w-32 h-32 rounded-full"
        //           alt={name}
        //         />
        //       </a>
        //     </Link>
        //     <h2 className={utilStyles.headingLg}>
        //       <Link href="/">
        //         <a className="text-xl">{name}</a>
        //       </Link>
        //     </h2>
        //   </>
        // )
        }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
