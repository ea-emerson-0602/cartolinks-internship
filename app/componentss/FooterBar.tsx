import { File,  IdCard} from "lucide-react";

export default function FooterBar() {
  return (
    <div className="w-full">
        <div className="flex justify-between px-6">
            <span className="font-semibold text-xl">Gallery</span>
             <div className="flex justify-end items-center px-4 py-2 text-sm text-gray-600">
        <a href="#" className="hover:underline mr-4 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md"><File className="w-6 h-6 text-primary" fill="currentColor"/>Legal</a>
        <a href="#" className="flex items-center gap-2 hover:underline bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md"><IdCard className="w-6 h-6 text-primary" />Pricing</a>
      </div>
        </div>
      {/* Top bar */}
     

      {/* Dark bar */}
      <div className="bg-black/90 text-white flex items-center justify-between px-6 py-8">
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-3xl">Krea AI</span>
        </div>

        {/* Right: Curated by Mobbin */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-3xl">curated by</span>
          <span className="font-bold text-5xl italic ml-4">M</span>
          <span className="font-semibold text-4xl">Mobbin</span>
        </div>
      </div>
    </div>
  );
}
