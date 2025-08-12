
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Thailand-Detective</span>
            </div>
            <p className="text-slate-300">
              สายสืบมืออาชีพที่คุณไว้วางใจได้ 
              ด้วยประสบการณ์กว่า 15 ปี
            </p>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10614.258127863195!2d100.767485!3d14.034213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7870160cd2db%3A0x160b468b7d9176b5!2zMSDguJbguJnguJnguKPguLHguIfguKrguLTguJUgLSDguJnguITguKPguJnguLLguKLguIEg4LiV4Liz4Lia4LilIOC4peC4s-C4nOC4seC4geC4geC4ueC4lCDguK3guLPguYDguKDguK3guJjguLHguI3guJrguLjguKPguLUg4Lib4LiX4Li44Lih4LiY4Liy4LiZ4Li1IDEyMTEw!5e1!3m2!1sth!2sth!4v1751467477908!5m2!1sth!2sth" width="300" height="300"  loading="lazy"></iframe>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">บริการของเรา</h3>
            <ul className="space-y-2 text-slate-300">
              <li>สืบสวนคู่รัก</li>
              <li>สืบสวนบุคคล</li>
              <li>ตรวจสอบเอกสาร</li>
              <li>รักษาความปลอดภัย</li>
              <li>เฝ้าระวัง-ติดตาม</li>
              <li>ค้นหาที่อยู่</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">เมนูหลัก</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">บริการ</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">เกี่ยวกับเรา</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">ติดต่อ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">นโยบายความเป็นส่วนตัว</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">ติดต่อเรา</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">081-649-9094, 084-017-9049</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">contact@support.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-slate-300">79/450 หมู่ที่ 1 ถนนรังสิต-นครนายก ต.ลำผักกูด อ.ธัญบุรี จ.ปทุมธานี 12110</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Thailand-Detective. สงวนลิขสิทธิ์ทุกประการ | 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
