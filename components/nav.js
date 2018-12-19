import Link from "next/link";

export default () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/friends">
        <a>Friends</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        nav {
          padding: 5px;
        }
        nav a {
          padding-left: 10px;
          padding-right: 10px;
          font-size: 15px;
        }
      `}</style>
    </nav>
  );
};
