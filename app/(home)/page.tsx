import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Clickism</h1>
      <p>
        The home page is work in progress!
      </p>
      <p>
        But in the mean time you can check out the
        {" "}
        <Link href="/docs" className="text-fd-primary underline">
          documentation
        </Link>
        {" "}
        for my projects!
      </p>
    </div>
  );
}
