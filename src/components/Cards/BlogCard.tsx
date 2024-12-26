import { IBlog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import * as motion from "framer-motion/client";
import { headVariants } from "@/animation";
interface IProps {
  blog: IBlog;
  index: number;
}
const BlogCard: React.FC<IProps> = ({ blog,index }) => {
  const extraTime = (0.5 * index) / 2;
  return (
    <motion.div
    {...headVariants(0.5 + extraTime)}
    >
      <Card className="bg-[#161b22] border-[#30363d] hover:border-[#00ffff] transition-colors overflow-hidden">
        <div className="aspect-video relative">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">
            {blog.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-2 line-clamp-3">{blog.description}</p>
          <p className="text-[#00ffff] text-sm">
            {format(new Date(blog.createdAt), "dd MMM yyyy")}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
