"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
interface IProps {
  className?: string;
}

const GoBack: React.FC<IProps> = ({ className }) => {
  const router = useRouter();

  return (
    <button
      className={`flex items-center gap-[8px] text-[25px] font-[500] text-white ${
        className || ""
      }`}
      onClick={() => router.back()}
    >
      <FaArrowLeft />
      Go Back
    </button>
  );
};

export default GoBack;
