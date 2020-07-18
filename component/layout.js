import Head from 'next/head';
import Link from 'next/link';

const name = 'Neo Holk';
export const siteTitle = "Neo's Blog";

const Layout = ({ children, home }) => {
  return (
    <div className="max-w-xl px-4 py-0 mt-12 mx-auto mb-24">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="liaohaoxiang" />
        <link rel="icon shortcut" href="/images/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon"></link>
        <meta
          name="description"
          content="Blog Record Tech and Life"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
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
        //     <h2>
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
        <div className="mt-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
