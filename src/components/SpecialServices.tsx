
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  UserX, 
  Search
} from "lucide-react";

const SpecialServices = () => {
  const specialServices = [
    {
      icon: Heart,
      title: "Cheating",
      subtitle: "สืบสวนความสัมพันธ์",
      description: "ติดตามสืบหาความสัมพันธ์ พฤติกรรม การชู้สาว สืบหาหลักฐาน เก็บหลักฐานทั้งรูปภาพและวีดิโอ เบอร์โทรศัพท์ และข้อมูลมือที่สาม",
      image: "public/images/image8.png",
      features: [
        "ติดตามสืบหาความสัมพันธ์",
        "สืบหาพฤติกรรมการชู้สาว",
        "เก็บหลักฐานรูปภาพและวีดิโอ",
        "สืบค้นเบอร์โทรศัพท์",
        "รวบรวมข้อมูลมือที่สาม",
        "จัดทำรายงานหลักฐาน"
      ],
      color: "from-red-600 to-pink-600"
    },
    {
      icon: UserX,
      title: "Missing Person",
      subtitle: "ติดตามบุคคลสูญหาย",
      description: "ติดตามบุคคลสูญหาย ติดต่อไม่ได้ การเดินทางครั้งล่าสุด และพฤติกรรม",
      image: "public/images/image9.jpg",
      features: [
        "ติดตามบุคคลสูญหาย",
        "สืบหาบุคคลที่ติดต่อไม่ได้",
        "ตรวจสอบการเดินทางครั้งล่าสุด",
        "วิเคราะห์พฤติกรรมและรูปแบบชีวิต",
        "ติดต่อเครือข่ายและคนรู้จัก",
        "ค้นหาจากฐานข้อมูลต่างๆ"
      ],
      color: "from-orange-600 to-yellow-600"
    },
    {
      icon: Search,
      title: "Background Checks",
      subtitle: "ตรวจสอบประวัติบุคคล",
      description: "ตรวจสอบประวัติบุคคลย้อนหลัง หาหลักฐานเพิ่มเติมเกี่ยวกับบุคคล",
      image: "public/images/image10.jpg",
      features: [
        "ตรวจสอบประวัติบุคคลย้อนหลัง",
        "หาหลักฐานเพิ่มเติมเกี่ยวกับบุคคล",
        "ตรวจสอบประวัติการศึกษา",
        "ตรวจสอบประวัติการทำงาน",
        "ตรวจสอบประวัติทางการเงิน",
        "จัดทำรายงานประเมินความเสี่ยง"
      ],
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            บริการ<span className="text-blue-400">เฉพาะทาง</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            บริการสืบสวนเฉพาะทางที่ต้องการความเชี่ยวชาญสูง 
            ด้วยประสบการณ์และเทคนิคการสืบสวนขั้นสูง
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {specialServices.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-700 hover:border-blue-400 transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden group flex flex-col h-full"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.subtitle}</p>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6 flex-1 flex flex-col">
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4 flex-1">
                  <h4 className="text-lg font-semibold text-blue-400">รายละเอียดบริการ:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1.5">•</span>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-700 mt-auto">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300 h-12"
                  >
                    ปรึกษาเฉพาะกรณี
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="bg-slate-900/70 border border-slate-700 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ความลับและความเป็นส่วนตัวของท่านคือสิ่งสำคัญ
            </h3>
            <p className="text-slate-300 leading-relaxed">
              เราให้ความสำคัญกับความเป็นส่วนตัวและความลับของลูกค้าเป็นอันดับแรก 
              ข้อมูลทุกอย่างจะถูกเก็บรักษาอย่างเข้มงวดและใช้เพื่อวัตถุประสงค์ในการสืบสวนเท่านั้น
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
