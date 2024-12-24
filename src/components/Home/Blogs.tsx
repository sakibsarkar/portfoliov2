import { blogs } from "@/lib/utils";
import Link from "next/link";
import BlogCard from "../Cards/BlogCard";
import SectionHeading from "../shared/SectionHeading";

const Blogs = () => {
  return (
    <section id="experience">
      <div className="site_layout py-[100px]">
        <SectionHeading heading={"My Blogs"} />
        <div className="gap-[25px] grid grid-cols-4  mt-[120px] mx-auto">
          {blogs.map((blog, i) => (
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
