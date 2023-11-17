import axios from 'axios';
import { useEffect, useState } from 'react';
import FeaturedPostCard from '../components/featured-post-card';
import LatestPostCard from '../components/latest-post-card';
import { CATEGORIES } from '../constants/categories';
import { categoryProps } from '../utils/category-props';
export default function BlogFeed() {
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [posts, setPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    let categoryEndpoint =
      selectedCategory === 'featured'
        ? '/api/posts/featured'
        : `/api/posts/categories/${selectedCategory}`;

    axios
      .get(import.meta.env.VITE_API_PATH + categoryEndpoint)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCategory]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_PATH + '/api/posts/latest')
      .then((response) => {
        setLatestPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
<<<<<<< HEAD
    <div className="container mx-auto py-6 ">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-2xl font-semibold mb-4">
=======
    <div className="container mx-auto py-6">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full p-4 md:w-2/3">
          <h1 className="mb-4 text-2xl font-semibold">
>>>>>>> main
            {selectedCategory === 'featured'
              ? 'Featured Posts'
              : `Posts related to "${selectedCategory}"`}
          </h1>
          <div className="flex flex-col gap-4">
            {posts.slice(0, 5).map((post) => (
              <FeaturedPostCard post={post} />
            ))}
          </div>
        </div>
        <div className="w-full p-4 md:w-1/3">
          <div className="mb-6">
            <div className="text-gray-500">Discover by topic</div>
<<<<<<< HEAD
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2 dark:text-black">
=======
            <h2 className="mb-4 text-2xl font-semibold">Categories</h2>
            <div className="flex flex-wrap gap-2">
>>>>>>> main
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === category ? 'featured' : category)
                  }
                  className={
                    selectedCategory === category
                      ? categoryProps(category, true)
                      : categoryProps(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-gray-500">What's new ?</div>
            <h2 className="mb-4 text-2xl font-semibold">Latest Posts</h2>
            <div className="flex flex-col gap-2">
              {latestPosts.slice(0, 5).map((post) => (
                <LatestPostCard post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
