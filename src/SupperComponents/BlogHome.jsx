import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogHome() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Luxury Penthouse Development in South Mumbai",
      description: "Discover our latest development featuring panoramic sea views and world-class amenities in the heart of South Mumbai.",
      date: "March 15, 2024",
      category: "Luxury Living",
      image: "./villa/img7.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Sustainable Real Estate",
      description: "Exploring innovative green building technologies and sustainable practices in modern real estate development.",
      date: "March 12, 2024",
      category: "Sustainability",
      image: "./villa/img1.jpg",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Smart Homes: The New Standard",
      description: "How integrated technology is revolutionizing the luxury real estate market and enhancing resident experiences.",
      date: "March 10, 2024",
      category: "Technology",
      image: "./villa/img3.jpg",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="bg-[#433B71] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-300 text-lg">Discover the latest trends and developments in luxury real estate</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {blog.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div 
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}

