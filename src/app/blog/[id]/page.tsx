import { blogs } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((post) => post._id === params.id);

  if (!blog) {
    notFound();
  }
  return (
    <article className="w-full py-12 md:py-24 lg:py-32 bg-[#0d1117]">
      <div className="site_layout px-4 md:px-6">
        <div className="w-full h-[600px] center relative mb-8 rounded-lg overflow-hidden bg-[#292929]">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={1600}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter mb-6 text-white">
          {blog.title}
        </h1>
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
