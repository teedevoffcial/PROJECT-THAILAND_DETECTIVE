import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Tag, Search, ArrowLeft, Filter, Grid, List } from 'lucide-react';
import { BlogPost, getAllBlogPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [allTags, setAllTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    try {
      const posts = getAllBlogPosts();
      setBlogPosts(posts);
      setFilteredPosts(posts);
      
      // Extract all unique tags
      const tags = Array.from(new Set(posts.flatMap(post => post.tags)));
      setAllTags(tags);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    setFilteredPosts(filtered);
  }, [blogPosts, searchTerm, selectedTag]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-white mb-6 hover:bg-blue-900/30 transition-colors"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับ
            </Button>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-400 mb-6 leading-tight">
                บทความและข้อมูลข่าวสาร
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                อ่านบทความและเคล็ดลับเกี่ยวกับการสืบสวน การจ้างนักสืบ และบริการของเรา
                พร้อมข้อมูลข่าวสารที่น่าสนใจในวงการสืบสวน
              </p>
            </div>
          </div>

          {/* Search and Filters Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="ค้นหาบทความ เคล็ดลับ หรือข้อมูลที่สนใจ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>

                {/* Filter Controls */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">หมวดหมู่:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant={viewMode === 'grid' ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className="p-2"
                      >
                        <Grid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode('list')}
                        className="p-2"
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTag === tag ? "default" : "secondary"}
                      className={`cursor-pointer transition-all hover:scale-105 ${
                        selectedTag === tag 
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                          : "bg-slate-700/50 text-gray-300 hover:bg-slate-600 border border-slate-600"
                      }`}
                      onClick={() => handleTagClick(tag)}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Active Filters */}
                {(searchTerm || selectedTag) && (
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="text-gray-300 text-sm">
                      พบ {filteredPosts.length} บทความ
                      {searchTerm && ` สำหรับ "${searchTerm}"`}
                      {selectedTag && ` ในหมวดหมู่ "${selectedTag}"`}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="border-slate-500 text-white hover:bg-slate-600 transition-colors"
                    >
                      ล้างตัวกรอง
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700 max-w-md mx-auto">
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">ไม่พบบทความ</h2>
                <p className="text-gray-300 mb-6">
                  ลองเปลี่ยนคำค้นหาหรือหมวดหมู่
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="border-slate-500 text-white hover:bg-slate-600 transition-colors"
                >
                  ล้างตัวกรอง
                </Button>
              </div>
            </div>
          ) : (
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
            }`}>
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.slug} 
                  className={`group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <CardHeader className={viewMode === 'list' ? 'md:flex-1' : ''}>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className={viewMode === 'list' ? 'md:w-80' : ''}>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
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
                      className="w-full border-slate-500 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group-hover:scale-105"
                      onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                    >
                      อ่านเพิ่มเติม
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
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

export default Blog;