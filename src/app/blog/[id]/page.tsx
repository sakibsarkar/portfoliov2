import GoBack from "@/components/uiElements/GoBack";
import { baseUrl } from "@/lib/utils";
import { IBlog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const paramsData = await params;
  const res = await fetch(`${baseUrl}/blog/get/${paramsData.id}`, {
    cache: "no-store",
  });
  const data = (await res.json()) as { data: IBlog };
  const blog = data?.data;
  if (!blog) {
    notFound();
  }
  return (
    <article className="w-full py-12 md:py-24 lg:py-32 bg-[#0d1117]">
      <div className="site_layout px-4 md:px-6">
        <GoBack className="mb-8" />
        <h1 className="text-[20px] md:text-[20px] lg:text-[30px] font-bold tracking-tighter mb-6 text-white">
          {blog.title}
        </h1>{" "}
        <div className="w-full h-[150px] sm:h-[300px] lg:h-[600px] center relative mb-8 rounded-lg overflow-hidden bg-[#292929]">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={1600}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-[#00ffff] mb-8">
          {format(new Date(blog.createdAt), "PP")}
        </p>
        <div className="prose prose-invert max-w-none">
          <p
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </article>
  );
};

export default page;
