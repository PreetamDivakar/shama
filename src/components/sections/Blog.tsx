import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts: BlogPost[] = [
    {
      title: "Adopt a Dog vs Buying: Making the Right Choice for Your Family",
      description: "A comprehensive guide to help you decide between adoption and purchasing a dog, considering factors like cost, responsibility, and ethical implications.",
      image: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      url: "https://supertails.com/blogs/posts/adopt-a-dog-vs-buying-making-the-right-choice-for-your-family",
      category: "Dogs"
    },
    {
      title: "Beagle Dog Price: Complete Cost Guide",
      description: "Everything you need to know about Beagle prices in India, including initial costs, ongoing expenses, and factors affecting pricing.",
      image: "https://images.pexels.com/photos/1750380/pexels-photo-1750380.jpeg",
      url: "https://supertails.com/blogs/posts/beagle-dog-price",
      category: "Dogs"
    },
    {
      title: "Cat Breeds for the Indian Climate: A Guide",
      description: "Discover the best cat breeds suited for India's diverse climate conditions, with tips on care and maintenance.",
      image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg",
      url: "https://supertails.com/blogs/posts/cat-breeds-for-the-indian-climate-a-guide",
      category: "Cats"
    },
    {
      title: "The Importance of Fear-Free Veterinary Care",
      description: "Learn about the benefits of fear-free veterinary practices and how they can improve your pet's healthcare experience.",
      image: "https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg",
      url: "https://supertails.com/blogs/posts/the-importance-of-fear-free-veterinary-care-for-your-pet",
      category: "Pet Care"
    },
    {
      title: "Must-Have Summer Dog Products: Supertails' Top Picks",
      description: "Essential products to keep your dog cool and comfortable during the hot summer months.",
      image: "https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg",
      url: "https://supertails.com/blogs/posts/must-have-summer-dog-products-supertails-top-picks",
      category: "Products"
    },
    {
      title: "Can Dogs Eat Eggs Daily? Here's What Vets Say",
      description: "Expert veterinary advice on incorporating eggs into your dog's diet safely and effectively.",
      image: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      url: "https://supertails.com/blogs/posts/can-dog-eat-eggs-daily-heres-what-vets-say",
      category: "Nutrition"
    },
    {
      title: "Can Dogs Drink Milk? Everything You Should Know",
      description: "A comprehensive guide to milk consumption in dogs, including benefits, risks, and alternatives.",
      image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
      url: "https://supertails.com/blogs/posts/can-dogs-drink-milk-everything-you-should-know-before-pouring",
      category: "Nutrition"
    },
    {
      title: "Cat Lifespan: What Every Cat Parent Needs to Know",
      description: "Understanding factors that affect cat longevity and tips for helping your feline friend live a longer, healthier life.",
      image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg",
      url: "https://supertails.com/blogs/posts/cat-lifespan-what-every-cat-parent-needs-to-know",
      category: "Cats"
    },
    {
      title: "Indian Parrot Breeds: Which One is Best for a Pet?",
      description: "A detailed comparison of Indian parrot breeds to help you choose the perfect avian companion.",
      image: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg",
      url: "https://supertails.com/blogs/posts/indian-parrot-breeds-which-one-is-best-for-a-pet",
      category: "Birds"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="blog" className="py-20 bg-background-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-6">Latest Blog Posts</h2>
          <p className="subtitle">
            Explore my articles on pet care, nutrition, and wellness. Each piece combines SEO expertise
            with engaging content to educate and inform pet parents.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="magic-card group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 bg-accent-blue/90 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="heading-sm mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-text-secondary mb-4 line-clamp-3">{post.description}</p>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
