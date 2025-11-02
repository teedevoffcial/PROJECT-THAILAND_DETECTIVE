
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "ใบอนุญาตถูกต้อง",
      description: "ได้รับใบอนุญาตจากหน่วยงานราชการอย่างถูกต้องตามกฎหมาย"
    },
    {
      icon: Award,
      title: "ประสบการณ์ 15+ ปี",
      description: "ทีมงานมีประสบการณ์กว่า 15 ปีในการสืบสวนและรักษาความปลอดภัย"
    },
    {
      icon: Clock,
      title: "บริการ 24/7",
      description: "พร้อมให้บริการตลอด 24 ชั่วโมง ทุกวัน ไม่มีวันหยุด"
    },
    {
      icon: Users,
      title: "ทีมมืออาชีพ",
      description: "ทีมสายสืบที่ผ่านการฝึกฝนและมีความเชี่ยวชาญเฉพาะด้าน"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                เกี่ยวกับ <span className="text-blue-400">Thailand-Detective</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                เราเป็นบริษัทสายสืบมืออาชีพที่มีประสบการณ์กว่า 15 ปีในการให้บริการสืบสวน
                และรักษาความปลอดภัย ด้วยทีมงานที่มีความเชี่ยวชาญและเทคโนโลยีที่ทันสมัย
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                เรามุ่งมั่นที่จะให้บริการที่มีคุณภาพ รักษาความลับ และปฏิบัติตามกฎหมาย
                เพื่อให้ลูกค้าได้รับข้อมูลที่แม่นยำและเชื่อถือได้
              </p>
            </div>

            {/* Professional Team Image */}
            <div className="relative mb-8">
              <img 
                src="/images/image12.jpg"
                alt="Professional Team"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-900/40 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-lg font-semibold">ทีมงานมืออาชีพ</div>
                <div className="text-blue-200">พร้อมให้บริการ 24/7</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 hover:scale-105 transition-transform animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
