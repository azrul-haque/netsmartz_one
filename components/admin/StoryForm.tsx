'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiSave, FiX, FiImage } from 'react-icons/fi';

interface StoryFormProps {
  slug?: string;
}

export default function StoryForm({ slug }: StoryFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(!!slug);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    excerpt: '',
    content: '',
    published: true,
  });

  useEffect(() => {
    if (slug) {
      fetchStory();
    }
  }, [slug]);

  const fetchStory = async () => {
    try {
      const response = await fetch(`/api/success-stories/${slug}`);
      const data = await response.json();
      
      if (data.success) {
        setFormData({
          title: data.data.title,
          category: data.data.category || '',
          image: data.data.image,
          excerpt: data.data.excerpt || '',
          content: data.data.content,
          published: data.data.published,
        });
      }
    } catch (error) {
      console.error('Error fetching story:', error);
    } finally {
      setInitialLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = slug
        ? `/api/success-stories/${slug}`
        : '/api/success-stories';
      
      const method = slug ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(`Success story ${slug ? 'updated' : 'created'} successfully!`);
        router.push('/admin/success-stories');
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error saving story:', error);
      alert('Error saving success story');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#fe7725]"></div>
          <p className="mt-4 text-gray-600">Loading story...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {slug ? 'Edit Success Story' : 'New Success Story'}
              </h1>
              <p className="mt-1 text-gray-600">
                {slug ? 'Update the success story details' : 'Add a new success story to your website'}
              </p>
            </div>
            <Link
              href="/admin/success-stories"
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              <FiX /> Cancel
            </Link>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
          {/* Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe7725] focus:border-transparent outline-none transition"
              placeholder="e.g., Strategic BOT Transformation for Leading Bank"
            />
            <p className="mt-1 text-sm text-gray-500">The main headline for your success story</p>
          </div>

          {/* Category */}
          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe7725] focus:border-transparent outline-none transition"
              placeholder="e.g., GCCs, Healthcare, Technology"
            />
            <p className="mt-1 text-sm text-gray-500">Optional category for filtering and organization</p>
          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
              Featured Image URL <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="url"
                  id="image"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe7725] focus:border-transparent outline-none transition"
                  placeholder="https://images.unsplash.com/photo-..."
                />
              </div>
            </div>
            {formData.image && (
              <div className="mt-3">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg border border-gray-200"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
                  }}
                />
              </div>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Use Unsplash or any image URL (recommended size: 800x600px)
            </p>
          </div>

          {/* Excerpt */}
          <div className="mb-6">
            <label htmlFor="excerpt" className="block text-sm font-semibold text-gray-700 mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              rows={3}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe7725] focus:border-transparent outline-none transition resize-none"
              placeholder="Brief summary of the success story (2-3 sentences)"
            />
            <p className="mt-1 text-sm text-gray-500">Optional short description shown on cards</p>
          </div>

          {/* Content */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              rows={15}
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe7725] focus:border-transparent outline-none transition font-mono text-sm resize-y"
              placeholder="<div class='prose'>
  <h2>Challenge</h2>
  <p>Description...</p>
  
  <h2>Solution</h2>
  <p>Description...</p>
  
  <h2>Results</h2>
  <ul>
    <li>Result 1</li>
    <li>Result 2</li>
  </ul>
</div>"
            />
            <p className="mt-1 text-sm text-gray-500">
              HTML content for the detail page. Use semantic HTML tags.
            </p>
          </div>

          {/* Published Status */}
          <div className="mb-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-5 h-5 text-[#fe7725] border-gray-300 rounded focus:ring-2 focus:ring-[#fe7725]"
              />
              <div>
                <span className="text-sm font-semibold text-gray-700">Publish immediately</span>
                <p className="text-sm text-gray-500">
                  Uncheck to save as draft
                </p>
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                <>
                  <FiSave /> {slug ? 'Update Story' : 'Create Story'}
                </>
              )}
            </button>
            <Link
              href="/admin/success-stories"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
