import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag } from 'lucide-react';
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
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">กำลังโหลดบทความ...</h2>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
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
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">บทความล่าสุด</h2>
            <p className="text-gray-300">ยังไม่มีบทความ</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">บทความล่าสุด</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            อ่านบทความและเคล็ดลับเกี่ยวกับการสืบสวน การจ้างนักสืบ และบริการของเรา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Card key={post.slug} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                  <User className="w-4 h-4 ml-2" />
                  <span>{post.author}</span>
                </div>
                <CardTitle className="text-white text-lg line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-300 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-600 text-gray-300">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-500 text-white hover:bg-slate-600"
                  onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                >
                  อ่านเพิ่มเติม
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-slate-500 text-white hover:bg-slate-600"
              onClick={() => window.open('/blog', '_blank')}
            >
              ดูบทความทั้งหมด
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 