import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { BlogPost, getAllBlogPosts } from '@/lib/blog';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);
      
      const posts = getAllBlogPosts();
      console.log('Loaded blog posts:', posts);
      setBlogPosts(posts);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setError('ไม่สามารถโหลดบทความได้');
    } finally {
      setLoading(false);
    }
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (error) {
      return dateString;
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">กำลังโหลดบทความ...</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-red-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-red-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-red-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">เกิดข้อผิดพลาด</h2>
            <p className="text-gray-300 mb-8 text-lg">{error}</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              ลองใหม่
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              บทความ<span className="text-blue-400">ล่าสุด</span>
            </h2>
            <p className="text-gray-300 text-lg">ยังไม่มีบทความ</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/30 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/20">
            <BookOpen className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            บทความ<span className="text-blue-400">ล่าสุด</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            อ่านบทความและเคล็ดลับเกี่ยวกับการสืบสวน การจ้างนักสืบ และบริการของเรา
            <br />
            <span className="text-blue-400">อัพเดตความรู้ใหม่ๆ เพื่อความปลอดภัยของคุณ</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Card 
              key={post.slug} 
              className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Header with Gradient Overlay */}
              <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 border-b border-slate-600/50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4 text-blue-400" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-white text-xl line-clamp-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {post.title}
                  </CardTitle>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <CardDescription className="text-gray-300 line-clamp-3 leading-relaxed text-base">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-blue-900/30 text-blue-300 border border-blue-700/50 hover:bg-blue-800/40 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge 
                      variant="secondary" 
                      className="bg-slate-700/50 text-gray-400 border border-slate-600/50"
                    >
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group/btn"
                    onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                  >
                    <span>อ่านเพิ่มเติม</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group border-0"
              onClick={() => window.open('/blog', '_blank')}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              <span>ดูบทความทั้งหมด</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;