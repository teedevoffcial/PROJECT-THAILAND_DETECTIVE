# ระบบ Blog สำหรับ Thai Detective

ระบบ blog ที่สามารถเขียนบทความเป็น Markdown files และแสดงผลบนเว็บไซต์ได้

## โครงสร้างไฟล์

```
src/
├── content/
│   └── blog/                    # โฟลเดอร์เก็บ blog posts
│       ├── 2024-01-15-first-blog-post.md
│       ├── 2024-01-20-tips-for-hiring-detective.md
│       └── 2024-01-25-digital-investigation.md
├── components/
│   └── Blog.tsx                 # Component แสดง blog posts
├── pages/
│   ├── Blog.tsx                 # หน้าบทความทั้งหมด
│   └── BlogPost.tsx             # หน้าบทความเดี่ยว
└── lib/
    └── blog.ts                  # Utility functions
```

## วิธีการสร้าง Blog Post ใหม่

### 1. สร้างไฟล์ Markdown ใหม่

สร้างไฟล์ใหม่ใน `src/content/blog/` โดยใช้ชื่อไฟล์ในรูปแบบ:
```
YYYY-MM-DD-title-of-post.md
```

ตัวอย่าง: `2024-01-30-new-blog-post.md`

### 2. เขียน Front Matter

ทุก blog post ต้องมี front matter ที่ส่วนบนของไฟล์:

```markdown
---
title: "ชื่อบทความ"
date: "YYYY-MM-DD"
author: "ชื่อผู้เขียน"
excerpt: "คำอธิบายสั้นๆ ของบทความ"
tags: ["แท็ก1", "แท็ก2", "แท็ก3"]
featuredImage: "/images/blog-image.jpg"
---

# เนื้อหาบทความ

เนื้อหาบทความในรูปแบบ Markdown...
```

### 3. เขียนเนื้อหา

เขียนเนื้อหาบทความในรูปแบบ Markdown:

```markdown
# หัวข้อหลัก

## หัวข้อรอง

### หัวข้อย่อย

- รายการ 1
- รายการ 2
- รายการ 3

**ข้อความหนา**
*ข้อความเอียง*

> ข้อความอ้างอิง

[ลิงก์](https://example.com)

![รูปภาพ](/path/to/image.jpg)
```

## ฟีเจอร์ที่รองรับ

### 1. การแสดงผลบนหน้า Index
- แสดง blog posts ล่าสุด 3 บทความ
- แสดงวันที่, ผู้เขียน, และแท็ก
- ปุ่ม "ดูบทความทั้งหมด" เพื่อไปยังหน้า blog

### 2. หน้า Blog หลัก (/blog)
- แสดงรายการบทความทั้งหมด
- ระบบค้นหาบทความ
- ตัวกรองตามแท็ก
- แสดงจำนวนผลลัพธ์

### 3. หน้าบทความเดี่ยว (/blog/:slug)
- แสดงเนื้อหาบทความเต็มรูปแบบ
- รองรับ Markdown syntax
- แสดงบทความที่เกี่ยวข้อง
- ปุ่มแชร์บทความ

### 4. Markdown Features ที่รองรับ
- หัวข้อ (H1, H2, H3, etc.)
- รายการ (Bullet points และ Numbered lists)
- ข้อความหนาและเอียง
- ลิงก์และรูปภาพ
- Blockquotes
- Code blocks
- Tables (ผ่าน remark-gfm)

## การติดตั้ง Dependencies

ระบบนี้ใช้ dependencies ต่อไปนี้:

```bash
npm install react-markdown gray-matter remark-gfm rehype-highlight
```

## การใช้งาน

### 1. เพิ่ม Blog Component ในหน้า Index

```tsx
import Blog from "@/components/Blog";

// ในหน้า Index
<Blog />
```

### 2. เพิ่ม Routes ใน App.tsx

```tsx
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// ใน Routes
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogPost />} />
```

## การปรับแต่ง

### 1. เปลี่ยนจำนวนบทความที่แสดงในหน้า Index

แก้ไขใน `src/components/Blog.tsx`:

```tsx
{blogPosts.slice(0, 3).map((post) => (  // เปลี่ยนจาก 3 เป็นจำนวนที่ต้องการ
```

### 2. เปลี่ยนจำนวนบทความที่เกี่ยวข้อง

แก้ไขใน `src/pages/BlogPost.tsx`:

```tsx
const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);  // เปลี่ยนจาก 3
```

### 3. เพิ่มฟิลด์ใหม่ใน Front Matter

แก้ไขใน `src/lib/blog.ts`:

```tsx
export interface BlogPost {
  // เพิ่มฟิลด์ใหม่
  newField: string;
}

// ในฟังก์ชัน getAllBlogPosts และ getBlogPostBySlug
return {
  // เพิ่มการอ่านฟิลด์ใหม่
  newField: matterResult.data.newField,
};
```

## ข้อควรระวัง

1. **ชื่อไฟล์**: ใช้รูปแบบ `YYYY-MM-DD-title.md` เพื่อให้เรียงลำดับถูกต้อง
2. **Front Matter**: ต้องมีฟิลด์ที่จำเป็นครบถ้วน
3. **Encoding**: ใช้ UTF-8 สำหรับภาษาไทย
4. **รูปภาพ**: เก็บรูปภาพใน `public/images/` และอ้างอิงด้วย `/images/filename.jpg`

## การแก้ไขปัญหา

### 1. บทความไม่แสดง
- ตรวจสอบชื่อไฟล์และ front matter
- ตรวจสอบ console errors
- ตรวจสอบ path ของไฟล์

### 2. Markdown ไม่ render
- ตรวจสอบ dependencies
- ตรวจสอบ syntax ของ Markdown
- ตรวจสอบ CSS classes

### 3. ภาษาไทยแสดงผิด
- ตรวจสอบ encoding ของไฟล์
- ตรวจสอบ font-family ใน CSS
- ตรวจสอบ meta charset ใน HTML 