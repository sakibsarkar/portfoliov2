import { baseUrl } from "@/lib/utils";
import { IBlog } from "@/types/blog";
import Link from "next/link";
import BlogCard from "../Cards/BlogCard";
import SectionHeading from "../shared/SectionHeading";

const Blogs = async () => {
  const res = await fetch(`${baseUrl}/blog/get`, {
    cache: "no-store",
  });
  const data = (await res.json()) as { data: IBlog[] };
  return (
    <section id="experience">
      <div className="site_layout py-[100px]">
        <SectionHeading heading={"My Blogs"} />
        <div className="gap-[25px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-[120px] mx-auto">
          {data?.data?.map((blog, i) => (
            <Link href={`/blog/${blog._id}`} key={i + "blog"}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
