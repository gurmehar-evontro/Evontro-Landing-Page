"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "How AI Will Transform Businesses in 2025",
    desc: "Discover how Artificial Intelligence is reshaping industries and enabling smarter decision-making.",
    image: "/blog1.jpg",
    category: "Technology",
    date: "Jan 10, 2025",
    readTime: "6 min read",
  },
  {
    title: "Top 10 UI/UX Design Trends You Must Know",
    desc: "From glassmorphism to immersive micro-interactions, see what’s trending in design.",
    image: "/blog2.jpg",
    category: "Design",
    date: "Feb 02, 2025",
    readTime: "4 min read",
  },
  {
    title: "Why Cloud Solutions Are Essential for Startups",
    desc: "Cloud services help startups scale faster with lower infrastructure cost. Here's how...",
    image: "/blog3.jpg",
    category: "Cloud",
    date: "Feb 18, 2025",
    readTime: "5 min read",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[#F8FAFF] py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2FB3]">
            Latest <span className="text-orange-500">Blogs</span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our expert team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                {/* Category */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full">
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold text-[#1A2FB3] group-hover:text-orange-500 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {blog.desc}
                </p>

                {/* Date + Read Time */}
                <div className="flex items-center justify-between text-gray-500 text-xs pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {blog.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {blog.readTime}
                  </div>
                </div>

                {/* Read More */}
                <button className="mt-3 text-sm font-semibold text-[#1A2FB3] hover:text-orange-500 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
