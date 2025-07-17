import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.05'%3E%3Cpath d='M40 40l20-20v40l-20-20zm-20 0l20 20h-40l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ติดต่อ<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">เรา</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            พร้อมให้คำปรึกษาฟรี 24 ชั่วโมง 
            <br />
            <span className="text-blue-400 font-medium">รักษาความลับอย่างเคร่งครัด</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">ช่องทางติดต่อ</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "โทรศัพท์", value: "081-649-9094, 084-017-9049" },
                  { icon: Mail, title: "อีเมล", value: "suksan.noknoum@gmail.com" },
                  { icon: MapPin, title: "ที่อยู่", value: "79/450 หมู่ที่ 1 ถนนรังสิต-นครนายก ต.ลำผักกูด อ.ธัญบุรี จ.ปทุมธานี 12110" },
                  { icon: Clock, title: "เวลาทำการ", value: "Monday - Sunday 08:00 - 00:00." }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-7 w-7 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">{item.title}</div>
                          <div className="text-slate-300">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <img 
                  src="public/images/image11.png"
                  alt="Professional Office"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-xl font-bold">สำนักงานสายสืบ</div>
                  <div className="text-blue-400 font-medium">เปิดบริการ 24 ชั่วโมง</div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <h4 className="text-blue-400 font-bold text-xl mb-6">หมายเหตุสำคัญ</h4>
                <ul className="text-slate-300 space-y-3">
                  {[
                    "การปรึกษาครั้งแรกฟรี ไม่เสียค่าใช้จ่าย",
                    "รักษาความลับอย่างเคร่งครัด 100%",
                    "ปฏิบัติตามกฎหมายอย่างเคร่งครัด",
                    "มีใบอนุญาตถูกต้องตามกฎหมาย"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-400 mr-3 text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modern Contact Form */}
          <div className="relative animate-fade-in delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-white text-3xl font-bold mb-8 text-center">ส่งข้อความถึงเรา</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 block mb-3 font-medium">ชื่อ</label>
                    <Input 
                      placeholder="ชื่อของคุณ" 
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 transition-colors rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-3 font-medium">นามสกุล</label>
                    <Input 
                      placeholder="นามสกุลของคุณ" 
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 transition-colors rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 block mb-3 font-medium">โทรศัพท์</label>
                  <Input 
                    placeholder="หมายเลขโทรศัพท์" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 transition-colors rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-3 font-medium">อีเมล</label>
                  <Input 
                    type="email" 
                    placeholder="อีเมลของคุณ" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 transition-colors rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-3 font-medium">ประเภทบริการ</label>
                  <select className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:border-blue-400 focus:border-blue-400 transition-colors">
                    <option className="bg-slate-800">เลือกประเภทบริการ</option>
                    <option className="bg-slate-800">สืบสวนคู่รัก</option>
                    <option className="bg-slate-800">สืบสวนบุคคล</option>
                    <option className="bg-slate-800">ตรวจสอบเอกสาร</option>
                    <option className="bg-slate-800">รักษาความปลอดภัย</option>
                    <option className="bg-slate-800">เฝ้าระวัง-ติดตาม</option>
                    <option className="bg-slate-800">ค้นหาที่อยู่</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 block mb-3 font-medium">รายละเอียด</label>
                  <Textarea 
                    placeholder="กรุณาระบุรายละเอียดที่ต้องการสืบสวน..."
                    rows={4}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 transition-colors rounded-xl resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 h-12 hover:scale-105 transition-all duration-300 rounded-xl font-medium text-lg">
                  ส่งข้อความ
                </Button>

                <p className="text-slate-400 text-sm text-center bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <span className="text-blue-400 font-medium">ข้อมูลของคุณจะถูกเก็บเป็นความลับอย่างเคร่งครัด</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
