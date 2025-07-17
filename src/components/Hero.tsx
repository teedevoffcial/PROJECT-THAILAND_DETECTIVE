
import { Button } from "@/components/ui/button";
import { Search, Shield, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with diagonal split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('public/images/image9.jpg')",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-900/70 to-slate-900/70"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        ></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-5xl font-bold text-blue-400 leading-tight">
                บริษัท พัฒน์รพีและนักสืบ จำกัด
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
              ด้วยประสบการณ์มากกว่า 10 + ที่สืบหาหลักฐานและข้อมูลประวัติบุคคล สืบหาข้อมูลประวัติสินทรัพย์ ทางการเมือง การชู้สาว

                  ติดตามพฤติกรรม สืบหาความสัมพันธ์ ทำงานแบบมืออาชีพ
                  รักษาข้อมูลของผู้ว่าจ้าง ส่งข้อมูลเป็นเอกสาร ภาพถ่าย คลิปวิดีโอ สำหรับการดำเนินการฟ้องร้องคดีในชั้นศาล
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 hover:scale-105 transition-all">
                <Search className="mr-2 h-5 w-5" />
                เริ่มต้นสืบสวน
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 hover:scale-105 transition-all"
              >
                ดูผลงาน
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-slate-300">คดีที่สำเร็จ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-slate-300">ความแม่นยำ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-slate-300">บริการ</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            {/* Professional Image */}

            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-900/50 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                  <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold">รักษาความลับ</h3>
                  <p className="text-slate-300 text-sm mt-2">100% ความปลอดภัย</p>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                  <Search className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold">สืบสวนลึก</h3>
                  <p className="text-slate-300 text-sm mt-2">ข้อมูลครบถ้วน</p>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-lg text-center col-span-2 hover:scale-105 transition-transform">
                  <Eye className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold">ติดตามเฝ้าระวัง</h3>
                  <p className="text-slate-300 text-sm mt-2">เทคโนโลยีทันสมัย</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
