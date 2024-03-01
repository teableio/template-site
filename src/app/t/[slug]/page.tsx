import { Button } from "@/components/ui/button";
import { getTemplate } from "./api";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";

export default async function Item(context: { params: { slug: string } }) {
  const slug = context.params.slug;
  const template = await getTemplate(slug);
  return (
    <main className="flex flex-col items-center p-6 relative min-h-screen">
      <div className="max-w-[1248px] grid grid-cols-8 w-full">
        <div className="sm:col-span-3 col-span-8 sm:sticky static top-[98px] sm:pr-12 sm:pb-0 pb-12 self-start">
          <div className="pb-4">
            <a
              className="text-sm text-gray-500 hover:text-black transition-colors"
              href="/"
            >
              ← Back to Templates
            </a>
          </div>
          <h1 className="mb-6 sm:text-5xl text-2xl font-semibold">
            {template.name}
          </h1>
          <pre className="text-base text-gray-500 break-words text-wrap overflow-hidden">
            {template.description}
          </pre>
          <div className="py-6">
            <a
              className=" block"
              href={
                "https://app.teable.io/create-from-template?id=" +
                template.baseId
              }
            >
              <Button className="w-full" size="lg">
                Use this template
              </Button>
            </a>
          </div>
          <ul>
            {template.tags?.map((tag) => (
              <li key={tag} className="text-sm text-gray-500 py-1">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-5 col-span-8 sm:pl-12 sm:border-l sm:border-t-0 border-t pt-12 sm:pt-0 ">
          <div className="relative sm:min-h-[400px] min-h-[250px] overflow-hidden rounded-md shadow-xl shadow-stone-300 sm:mb-14 mb-8">
            <Image
              className="relative object-cover dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={template.shortCut?.[0].presignedUrl || "/default_image.png"}
              alt={template.name || "cover"}
              quality={90}
              width={template.shortCut?.[0].width}
              height={template.shortCut?.[0].height}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="markdown-body">
            <Markdown remarkPlugins={[remarkGfm]}>{template.doc}</Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
