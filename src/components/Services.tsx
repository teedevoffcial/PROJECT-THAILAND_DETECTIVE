
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Users, 
  FileText, 
  Shield, 
  Camera, 
  MapPin,
  Phone,
  Heart
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "สืบสวนคู่รัก",
      description: "ตรวจสอบความจริงใจของคู่รัก การนอกใจ และพฤติกรรมต้องสงสัย",
      image: "/images/image3.png"
    },
    {
      icon: Users,
      title: "สืบสวนบุคคล",
      description: "ค้นหาตัวตน ประวัติ และข้อมูลส่วนตัวของบุคคลที่ต้องการ",
      image: "/images/image4.png"
    },
    {
      icon: FileText,
      title: "ตรวจสอบเอกสาร",
      description: "ยืนยันความถูกต้องของเอกสารสำคัญ และหลักฐานต่างๆ",
      image: "/images/image5.png"
    },
    {
      icon: Shield,
      title: "รักษาความปลอดภัย",
      description: "บริการคุ้มครองบุคคลสำคัญ และให้คำปรึกษาด้านความปลอดภัย",
      image: "/images/image6.png"
    },
    {
      icon: Camera,
      title: "เฝ้าระวัง-ติดตาม",
      description: "บริการเฝ้าระวังและติดตามเป้าหมายด้วยเทคโนโลยีทันสมัย",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: MapPin,
      title: "ค้นหาที่อยู่",
      description: "ติดตามและค้นหาที่อยู่ปัจจุบันของบุคคลที่ต้องการ",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            บริการ<span className="text-blue-400">สายสืบ</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            เรามีบริการครบครันสำหรับทุกความต้องการในการสืบสวน 
            ด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden group flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/60"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-blue-600/80 rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 flex-1 flex flex-col">
                <p className="text-slate-300 flex-1">{service.description}</p>
                <div className="text-blue-400 font-semibold text-lg">{service.price}</div>
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all h-12"
                  >
                    ขอใบเสนอราคา
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
