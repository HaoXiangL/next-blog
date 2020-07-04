import Link from 'next/link';

export default function BlogList({ blogData,current }){
  const list = blogData.filter(item => item.kind === current)
  return (
    <>
      <ul>
        {list.map(({ id, date, title }) => (
          <li className="mt-5 nav__list-style-none" key={id}>
            <Link href="posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className="text-gray-700">{date}</small>
          </li>
        ))}
      </ul>
    </>
  );
};
