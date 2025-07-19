
import { Button } from "@/components/ui/button";
import { Shield, Menu, Link } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="text-2xl">คุณติ้กนักสืบ
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">
              บริการ
            </a>
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
              เกี่ยวกับเรา
            </a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
              ติดต่อ
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              ปรึกษาฟรี
            </Button>
          </nav>

          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
