import Image from "next/image";
import { getTemplateList } from "./api";
import Link from "next/link";

export default async function Home() {
  const list = await getTemplateList();
  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 p-4">
      <section className="space-y-6 mb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:block">
          Teable starter templates
        </h1>
        <h2 className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl mt-">
          Dive into Teable Templates — your fast track to tailor-made Teable
          experiences, handpicked just for you!
        </h2>
      </section>
      <div className="mb-32 grid gap-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 text-left sm:grid-cols-2 grid-cols-1">
        {list.map((item) => {
          return (
            <Link
              key={item.id}
              href={{
                pathname: `t/${item.id}`,
              }}
              className="group relative rounded-lg border shadow overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="h-[180px] relative">
                <Image
                  className="relative object-cover dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src={item.cover?.[0].presignedUrl || "/default_image.png"}
                  alt={item.name || "cover"}
                  fill
                />
              </div>
              <div className="px-4 pt-4">
                <h2 className="flex mb-3 text-base font-semibold">
                  <span className=" truncate">{item.name || "Untitled"}</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none flex-shrink-0">
                    -&gt;
                  </span>
                </h2>
                <p className="`m-0 text-sm overflow-hidden line-clamp-2 text-gray-500">
                  {item.description}
                </p>
                <p className="my-3 text-sm text-gray-500">by Teable</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
