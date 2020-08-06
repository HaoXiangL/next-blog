import Link from 'next/link';

const name = 'Neo Holk';
export const siteTitle = "Neo's Blog";

const Layout = ({ children, home }) => {
  return (
    <div className="max-w-xxl md:px-0 px-4 py-0 mt-12 mx-auto mb-24">
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
