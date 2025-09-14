import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ImageIcon,
  Video,
  User,
  Brain,
  Wand,
  Wand2,
  Compass,
  Mic2,
} from "lucide-react";

const tools = [
  {
    icon: ImageIcon,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    isNew: true,
    color: "bg-gray-600",
  },
  {
    icon: Video,
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma and more.",
    isNew: false,
    color: "bg-orange-400",
  },
  {
    icon: Wand,
    title: "Realtime",
    description: "Real-time AI rendering as a canvas. Instant feedback loops.",
    isNew: false,
    color: "bg-cyan-400",
  },
  {
    icon: Wand2,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 2K.",
    isNew: true,
    color: "bg-gray-900",
  },
  {
    icon: Compass,
    title: "Edit",
    description:
      "Edit layouts, change style, or expand photos and generations.",
    isNew: true,
    color: "bg-purple-600",
  },
  {
    icon: Mic2,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    isNew: true,
    color: "bg-teal-900",
  },
  {
    icon: User,
    title: "Motion Transfer",
    description: "Transer motion to images and annimate characters.",
    isNew: true,
    color: "bg-black",
  },
  {
    icon: Brain,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    isNew: false,
    color: "bg-pink-400",
  },
];

export function Generate() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Generate</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-primary/80"
        >
          Show all
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-x-4">
        {tools.map((tool, index) => (
          <Card key={index} className="bg-card ">
            <CardContent className="p-4">
              <div className="grid grid-cols-5 gap-4 items-center">
                {/* Left: Icon */}
                <div className="flex items-center justify-center">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-b from-[var(--tw-color)] to-white/80 ${tool.color}`}
                  >
                    <tool.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Middle: Title, Tag, Description */}
                <div className="col-span-3 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-foreground">
                      {tool.title}
                    </h3>
                    {tool.isNew && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-600 text-white">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Right: Button */}
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-black hover:text-white rounded-full px-5 cursor-pointer transition-colors bg-transparent"
                  >
                    Open
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
