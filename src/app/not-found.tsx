import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <FileQuestion className="w-20 h-20 text-[#00FFF0] mx-auto" />
        <h1 className="text-4xl font-bold text-white">
          Content <span className="text-[#00FFF0]">Not Found</span>
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          The page content you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Button
          asChild
          className="bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90 transition-colors"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
