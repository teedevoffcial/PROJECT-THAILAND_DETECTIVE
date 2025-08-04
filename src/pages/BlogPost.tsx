import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, Tag, ArrowLeft, Share2, BookOpen, Clock, Eye } from 'lucide-react';
import { BlogPost, getBlogPostBySlug, getRecentBlogPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  // Mock data for demonstration
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    // Simulate loading a blog post
    const mockPost: BlogPost = {
      slug: 'guide-to-private-investigation',
      title: 'คู่มือการจ้างนักสืบเอกชน: สิ่งที่คุณควรรู้',
      excerpt: 'การจ้างนักสืบเอกชนเป็นการตัดสินใจที่สำคัญ เรียนรู้เกี่ยวกับขั้นตอน ค่าใช้จ่าย และสิ่งที่ควรคาดหวังจากบริการสืบสวนมืออาชีพ',
      content: `# การเริ่มต้นกับการสืบสวนเอกชน

การจ้างนักสืบเอกชนเป็นการตัดสินใจสำคัญที่ต้องใช้ความระมัดระวัง ไม่ว่าจะเป็นเรื่องการสืบสวนความสัมพันธ์ การค้นหาบุคคล หรือการเก็บหลักฐานทางกฎหมาย

## ขั้นตอนการเลือกนักสืบ

### 1. ตรวจสอบใบอนุญาต
- ใบอนุญาตประกอบวิชาชีพนักสืบเอกชน
- การจดทะเบียนบริษัทที่ถูกต้อง
- ประสบการณ์และผลงานที่ผ่านมา

### 2. การปรึกษาเบื้องต้น
นักสืบมืออาชีพควรให้:
- การปรึกษาเบื้องต้นฟรี
- การประเมินความเป็นไปได้ของคดี
- ข้อมูลเกี่ยวกับกระบวนการและระยะเวลา

## ค่าใช้จ่ายและการวางแผน

การวางแผนงบประมาณเป็นสิ่งสำคัญ:

> "การสืบสวนที่ดีต้องใช้เวลาและทรัพยากร แต่ผลลัพธ์ที่ได้จะคุ้มค่ากับการลงทุน"

### โครงสร้างค่าธรรมเนียม
- **ค่าบริการรายชั่วโมง**: 800-2,000 บาท/ชั่วโมง
- **ค่าใช้จ่ายเพิ่มเติม**: ค่าเดินทาง อุปกรณ์พิเศษ
- **ค่ามัดจำ**: โดยทั่วไป 30-50% ของค่าบริการทั้งหมด

## เทคโนโลยีและอุปกรณ์

นักสืบสมัยใหม่ใช้เทคโนโลยีทันสมัย:
- กล้องถ่ายภาพความละเอียดสูง
- อุปกรณ์บันทึกเสียง
- ระบบติดตาม GPS
- การวิเคราะห์ข้อมูลดิจิทัล

## การรักษาความลับ

**ความลับเป็นหัวใจของวิชาชีพนี้**

ทุกข้อมูลที่ได้รับจะถูก:
- เก็บรักษาอย่างปลอดภัย
- จำกัดการเข้าถึงเฉพาะผู้เกี่ยวข้อง
- ทำลายหลังจากเสร็จสิ้นคดี (ตามข้อตกลง)

## สิ่งที่ควรคาดหวัง

### ระหว่างการสืบสวน
- รายงานความคืบหน้าสม่ำเสมอ
- การติดต่อสื่อสารที่ชัดเจน
- ความโปร่งใสในการดำเนินงาน

### เมื่อเสร็จสิ้นการสืบสวน
- รายงานฉบับสมบูรณ์
- หลักฐานและเอกสารประกอบ
- คำแนะนำสำหรับขั้นตอนต่อไป

## ข้อควรระวัง

⚠️ **หลีกเลี่ยงนักสืบที่:**
- สัญญาผลลัพธ์ 100%
- ขอเงินมัดจำทั้งหมดล่วงหน้า
- ไม่มีใบอนุญาตที่ถูกต้อง
- ไม่ยินดีให้ข้อมูลอ้างอิง

## บทสรุป

การเลือกนักสืบเอกชนที่ดีจะช่วยให้คุณได้รับข้อมูลที่ถูกต้อง เชื่อถือได้ และสามารถนำไปใช้ประโยชน์ได้จริง การลงทุนในบริการสืบสวนคุณภาพจะคุ้มค่ากับผลลัพธ์ที่ได้รับ`,
      date: '2024-12-15',
      author: 'ทีมงานนักสืบมืออาชีพ',
      tags: ['คู่มือ', 'การจ้างนักสืบ', 'คำแนะนำ', 'เคล็ดลับ']
    };

    const mockRelatedPosts: BlogPost[] = [
      {
        slug: 'investigation-technology',
        title: 'เทคโนโลยีใหม่ในการสืบสวน',
        excerpt: 'ค้นพบเทคโนโลยีล่าสุดที่นักสืบใช้ในการเก็บหลักฐาน',
        content: '',
        date: '2024-12-10',
        author: 'ผู้เชี่ยวชาญด้านเทคโนโลยี',
        tags: ['เทคโนโลยี', 'นวัตกรรม']
      },
      {
        slug: 'legal-evidence',
        title: 'หลักฐานที่ใช้ได้ในชั้นศาล',
        excerpt: 'เรียนรู้เกี่ยวกับประเภทหลักฐานที่สามารถนำไปใช้ในกระบวนการยุติธรรม',
        content: '',
        date: '2024-12-08',
        author: 'ทนายความที่ปรึกษา',
        tags: ['กฎหมาย', 'หลักฐาน']
      },
      {
        slug: 'privacy-protection',
        title: 'การปกป้องความเป็นส่วนตัว',
        excerpt: 'วิธีการคุ้มครองข้อมูลส่วนตัวระหว่างการสืบสวน',
        content: '',
        date: '2024-12-05',
        author: 'ผู้เชี่ยวชาญด้านความปลอดภัย',
        tags: ['ความเป็นส่วนตัว', 'การคุ้มครอง']
      }
    ];

    setTimeout(() => {
      setPost(mockPost);
      setRelatedPosts(mockRelatedPosts);
      
      // Calculate reading time (assuming 200 words per minute)
      const wordCount = mockPost.content.split(' ').length;
      const estimatedReadingTime = Math.ceil(wordCount / 200);
      setReadingTime(estimatedReadingTime);
      
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
            <h1 className="text-3xl font-bold text-white mb-4">กำลังโหลดบทความ...</h1>
            <p className="text-gray-300">กรุณารอสักครู่</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">ไม่พบบทความ</h1>
            <p className="text-gray-300 mb-6">บทความที่คุณกำลังค้นหาอาจถูกลบหรือย้ายแล้ว</p>
            <Button 
              onClick={() => window.history.back()}
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              กลับไปหน้าบทความ
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-900/30 transition-colors"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับไปหน้าบทความ
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} นาทีในการอ่าน</span>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-400 mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-blue-400 pl-6">
                {post.excerpt}
              </p>

              {/* Tags and Actions */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-slate-700/50 text-gray-300 border border-slate-600 hover:bg-blue-900/30 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="border-slate-500 text-white hover:bg-blue-600 hover:border-blue-600 transition-all w-fit"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  แชร์บทความ
                </Button>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700 mb-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/# (.*)/g, '<h1 class="text-3xl font-bold text-blue-400 mb-6 mt-8 border-b border-slate-700 pb-4">$1</h1>')
                    .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mb-4 mt-8">$1</h2>')
                    .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-white mb-3 mt-6">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-400">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-200">$1</em>')
                    .replace(/> (.*)/g, '<blockquote class="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-300 mb-6 bg-slate-700/30 rounded-r-lg">$1</blockquote>')
                    .replace(/`(.*?)`/g, '<code class="bg-slate-700 text-blue-400 px-2 py-1 rounded text-sm">$1</code>')
                    .replace(/\n\n/g, '</p><p class="text-gray-300 mb-6 leading-relaxed text-lg">')
                    .replace(/^/, '<p class="text-gray-300 mb-6 leading-relaxed text-lg">')
                    .replace(/$/, '</p>')
                    .replace(/- (.*)/g, '<li class="text-gray-300 leading-relaxed ml-4">$1</li>')
                    .replace(/⚠️ \*\*(.*?)\*\*/g, '<div class="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4 mb-6"><strong class="text-yellow-400">⚠️ $1</strong></div>')
                }}
              />
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center">
                <BookOpen className="w-8 h-8 mr-3" />
                บทความที่เกี่ยวข้อง
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Card 
                    key={relatedPost.slug} 
                    className="group bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(relatedPost.date)}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-slate-500 text-white hover:bg-blue-600 hover:border-blue-600 transition-all group-hover:scale-105"
                        onClick={() => window.open(`/blog/${relatedPost.slug}`, '_blank')}
                      >
                        อ่านเพิ่มเติม
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;