import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Youtube, ArrowUpRight } from "lucide-react";

const YouTubeSection = () => {
  const videos = [
    {
      id: "GGOhiO0Y33g", // Replace with actual video ID
      title: "คุณติ๊กนักสืบให้สัมภาษณ์พร้อมแสดงวิธีการทำงาน",
      description: "รู้จักเทคนิคและเครื่องมือที่นักสืบมืออาชีพใช้ในการสืบสวน",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "vhVtZskD3I0", // Replace with actual video ID
      title: "บทสัมภาษณ์ คุณสุขสันต์ นกน่วมหรือติ๊ก นักสืบ เอกชน",
      description: "บทสัมภาษณ์ คุณ ติ๊ก นักสืบ เอกชน",
      thumbnail: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "XKN7q9E5thU", // Replace with actual video ID
      title: "บทสัมภาษณ์ คุณสุขสันต์ นกน่วมหรือติ๊ก นักสืบ เอกชน WETV",
      description: "บทสัมภาษณ์ คุณ ติ๊ก นักสืบ เอกชน WETV",
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6 p-4 bg-red-500/10 backdrop-blur-sm rounded-2xl border border-red-500/20">
            <Youtube className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            วิดีโอ<span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">ความรู้</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            เรียนรู้เทคนิคการสืบสวนและความรู้จากผู้เชี่ยวชาญ
            <br />
            <span className="text-blue-400 font-medium">เพื่อเสริมสร้างความเข้าใจในงานสายสืบมืออาชีพ</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleVideoClick(video.id)}
            >
              {/* Modern Card with Glassmorphism */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Video Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Modern Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                        <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-red-500/50 animate-ping group-hover:animate-none"></div>
                    </div>
                  </div>

                  {/* YouTube Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-red-500 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                      <Youtube className="h-3 w-3" />
                      YouTube
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                      {index === 0 ? '12:34' : index === 1 ? '8:45' : '15:22'}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-white font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {video.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>พร้อมดู</span>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 rounded-full px-6 group-hover:scale-105 transition-all duration-300"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      เล่น
                      <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/0 via-blue-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-blue-500/5 group-hover:to-red-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;