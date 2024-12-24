export default function Loading() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 border-4 border-[#00FFF0]/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-[#00FFF0] rounded-full border-t-transparent animate-spin" />
        </div>
        <h1 className="text-4xl font-bold text-white">
          <span className="text-[#00FFF0]">Loading</span>...
        </h1>
        <p className="text-gray-400">
          Please wait while we prepare your content.
        </p>
      </div>
    </div>
  );
}
