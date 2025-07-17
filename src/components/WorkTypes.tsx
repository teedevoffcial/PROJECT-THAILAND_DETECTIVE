
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileSearch, 
  Users, 
  Building, 
  Coins
} from "lucide-react";

const WorkTypes = () => {
  const workTypes = [
    {
      icon: FileSearch,
      title: "สืบงานทั่วไป",
      description: "สืบหาข้อมูลทางการเมือง สืบหาข้อมูลในต่างประเทศ สืบหาข้อมูลเกี่ยวกับการดำเนินคดีในชั้นศาล สืบหาพยานหลักฐานเพื่อประกอบการดำเนินคดี สืบหาข้อมูลและหลักฐานการทุจริตหรือประพฤติมิชอบ สืบทะเบียนประวัติอาชญากร",
      image: "/images/image7.png",
      details: [
        "สืบหาข้อมูลทางการเมือง",
        "สืบหาข้อมูลในต่างประเทศ", 
        "สืบหาข้อมูลเกี่ยวกับการดำเนินคดีในชั้นศาล",
        "สืบหาพยานหลักฐานเพื่อประกอบการดำเนินคดี",
        "สืบหาข้อมูลและหลักฐานการทุจริตหรือประพฤติมิชอบ",
        "สืบทะเบียนประวัติอาชญากร"
      ]
    },
    {
      icon: Users,
      title: "สืบงานบุคคล",
      description: "เราให้บริการสืบข้อมูลด้านบุคคล เช่น การสืบชู้สาว สืบจับบุคคลตามหมายศาล สืบหาคนหาย สืบพฤติกรรมบุตรหลาน ปลอมตัว สืบประวัติการก่ออาชญากรรม สืบประวัติบุคคลก่อนเข้ารับทำงาน สืบข้อมูลการเดินทางเข้าออกประเทศไทย สืบหารูปถ่ายของบุคคลที่ชัดเจน สืบหาทะเบียนบ้านของบุคคลพร้อมเครือญาติ สืบสถานภาพบุคคล สืบการหย่า เป็นต้น",
      image: "/images/image9.jpg",
      details: [
        "การสืบชู้สาว",
        "สืบจับบุคคลตามหมายศาล",
        "สืบหาคนหาย",
        "สืบพฤติกรรมบุตรหลาน",
        "สืบประวัติการก่ออาชญากรรม",
        "สืบประวัติบุคคลก่อนเข้ารับทำงาน",
        "สืบข้อมูลการเดินทางเข้าออกประเทศไทย",
        "สืบหารูปถ่ายของบุคคลที่ชัดเจน",
        "สืบหาทะเบียนบ้านของบุคคลพร้อมเครือญาติ",
        "สืบสถานภาพบุคคล",
        "สืบการหย่า"
      ]
    },
    {
      icon: Building,
      title: "สืบงานธุรกิจ",
      description: "บริการสืบสวนข้อมูลทางธุรกิจ การตรวจสอบความน่าเชื่อถือของคู่ค้า ข้อมูลบริษัท และการดำเนินธุรกิจต่างๆ เพื่อลดความเสี่ยงในการลงทุนและทำธุรกิจ",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "ตรวจสอบความน่าเชื่อถือของคู่ค้า",
        "สืบข้อมูลบริษัทและผู้บริหาร",
        "ตรวจสอบประวัติการดำเนินธุรกิจ",
        "สืบข้อมูลทางการเงินของบริษัท",
        "ตรวจสอบการทุจริตในองค์กร",
        "สืบสวนการละเมิดทรัพย์สินทางปัญญา"
      ]
    },
    {
      icon: Coins,
      title: "สืบทรัพย์สิน",
      description: "บริการสืบสวนและติดตามทรัพย์สิน การหาทรัพย์สินที่ซ่อนเร้น ตรวจสอบมูลค่าทรัพย์สิน และการติดตามทรัพย์สินที่หายไป เพื่อช่วยในการดำเนินคดีหรือการเรียกร้องสิทธิ",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "สืบหาทรัพย์สินที่ซ่อนเร้น",
        "ตรวจสอบมูลค่าทรัพย์สิน",
        "ติดตามทรัพย์สินที่หายไป",
        "สืบทรัพย์สินเพื่อการบังคับคดี",
        "ตรวจสอบการโอนทรัพย์สิน",
        "สืบข้อมูลที่ดินและอสังหาริมทรัพย์"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            ประเภท<span className="text-blue-400">งานที่เกี่ยวข้อง</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            เรามีความเชี่ยวชาญในการสืบสวนหลากหลายประเภท 
            ครอบคลุมทุกความต้องการของลูกค้าด้วยทีมงานมืออาชีพ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {workTypes.map((workType, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={workType.image} 
                  alt={workType.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/70"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center">
                    <workType.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{workType.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">
                <p className="text-slate-300 leading-relaxed">{workType.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-400">รายละเอียดบริการ:</h4>
                  <ul className="space-y-2">
                    {workType.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1.5">•</span>
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-sm text-slate-400">
                    ติดต่อเราเพื่อรับคำปรึกษาและใบเสนอราคา
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTypes;
