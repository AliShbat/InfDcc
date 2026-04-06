import Image from "next/image";
import Link from "next/link";

const Pageheader = () => {
  return (
    <div>
      <Link href="https://news.dcc.sy/">
        <Image
          alt="page"
          src="https://news.dcc.sy/storage/hero/headlogo.jpg"
          width={1900}
          height={1400}
        ></Image>
      </Link>
    </div>
  );
};

export default Pageheader;
