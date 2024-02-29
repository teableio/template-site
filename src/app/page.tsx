import Navbar from "@/components/navigation/NavigationBar";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        <section className=" space-y-6 mb-20">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
            Check out Teable templates
          </h1>
          <h2 className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl mt-">
            Dashboard, cards, authentication. Some examples built using the
            components. Use this as a guide to build your own.
          </h2>
        </section>
        <div className="mb-32 grid gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group relative rounded-lg border shadow overflow-hidden transition-shadow hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-[180px] relative">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="https://sss.teable.io/pvt-assets/table/rvZc2gOaRimk?Content-Type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=teable_s3%2F20240229%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240229T052434Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c24fbb79a9ae43fcee3f629399089ef6f99ae8e6f65fcb88fd0351e19b81a4b8"
                alt="Next.js Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="px-4 pt-4">
              <h2 className="flex mb-3 text-base font-semibold">
                <span className=" truncate">
                  DocsDo csDocsD ocsDoc sDocs Doc DocsDo csDocsD ocsDoc sDocs
                  Docs{" "}
                </span>
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none flex-shrink-0">
                  -&gt;
                </span>
              </h2>
              <p className="`m-0 max-w-[30ch] text-sm overflow-hidden line-clamp-2 text-gray-500">
                Find in-depth information about Next.js features and API.Find
                in-depth information about Next.js features and APIFind in-depth
                information about Next.js features and APIFind in-depth
                information about Next.js features and APIFind in-depth
                information about Next.js features and API
              </p>
              <p className="my-3 text-sm text-gray-500">by Teable</p>
            </div>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg shadow border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
