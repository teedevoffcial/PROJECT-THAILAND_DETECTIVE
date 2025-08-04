import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, ArrowRight, BookOpen, Sparkles, TrendingUp } from 'lucide-react';
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
      <section className="py-16 bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">กำลังโหลดบทความ...</h2>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-red-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-red-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-red-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">เกิดข้อผิดพลาด</h2>
            <p className="text-gray-300 mb-4">{error}</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              ลองใหม่
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <section className="py-16 bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">บทความล่าสุด</h2>
            <p className="text-gray-300">ยังไม่มีบทความ</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold">บทความใหม่</span>
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            บทความ<span className="text-blue-400">ล่าสุด</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            อ่านบทความและเคล็ดลับเกี่ยวกับการสืบสวน การจ้างนักสืบ และบริการของเรา
            <br />
            <span className="text-blue-400">เพิ่มความรู้เพื่อความปลอดภัยของคุณ</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Card 
              key={post.slug} 
              className="bg-slate-700/80 backdrop-blur-sm border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header with Enhanced Styling */}
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
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
                  
                  <CardTitle className="text-white text-lg line-clamp-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight mb-2">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
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
                      className="bg-slate-600/50 text-gray-400"
                    >
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group/btn"
                  onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                >
                  <span>อ่านเพิ่มเติม</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group border-0"
              onClick={() => window.open('/blog', '_blank')}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
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