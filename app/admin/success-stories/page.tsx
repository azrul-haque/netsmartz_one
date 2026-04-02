'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiCheck, FiX } from 'react-icons/fi';

interface SuccessStory {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  image: string;
  excerpt: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminSuccessStories() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch('/api/success-stories');
      const data = await response.json();
      if (data.success) {
        setStories(data.data);
      }
    } catch (error) {
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this success story?')) {
      return;
    }

    try {
      const response = await fetch(`/api/success-stories/${slug}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      
      if (data.success) {
        setStories(stories.filter(s => s.slug !== slug));
        alert('Success story deleted successfully!');
      } else {
        alert('Failed to delete success story');
      }
    } catch (error) {
      console.error('Error deleting story:', error);
      alert('Error deleting success story');
    }
  };

  const togglePublish = async (slug: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/success-stories/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !currentStatus }),
      });

      const data = await response.json();
      
      if (data.success) {
        fetchStories();
      }
    } catch (error) {
      console.error('Error updating story:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#fe7725]"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Success Stories Admin</h1>
              <p className="mt-1 text-gray-600">Manage your success stories and case studies</p>
            </div>
            <Link
              href="/admin/success-stories/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <FiPlus /> Add New Story
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm text-gray-600 font-medium">Total Stories</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">{stories.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm text-gray-600 font-medium">Published</div>
            <div className="text-3xl font-bold text-green-600 mt-2">
              {stories.filter(s => s.published).length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm text-gray-600 font-medium">Drafts</div>
            <div className="text-3xl font-bold text-orange-600 mt-2">
              {stories.filter(s => !s.published).length}
            </div>
          </div>
        </div>

        {/* Stories Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Story
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stories.map((story) => (
                  <tr key={story.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{story.title}</div>
                          <div className="text-sm text-gray-500">/{story.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {story.category && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {story.category}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => togglePublish(story.slug, story.published)}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          story.published
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {story.published ? <FiCheck className="text-xs" /> : <FiX className="text-xs" />}
                        {story.published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(story.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/success-stories/${story.slug}`}
                          target="_blank"
                          className="p-2 text-gray-600 hover:text-[#fe7725] hover:bg-orange-50 rounded-lg transition-colors"
                          title="View"
                        >
                          <FiEye />
                        </Link>
                        <Link
                          href={`/admin/success-stories/edit/${story.slug}`}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <FiEdit2 />
                        </Link>
                        <button
                          onClick={() => handleDelete(story.slug)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {stories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No success stories yet.</p>
                <Link
                  href="/admin/success-stories/new"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <FiPlus /> Add Your First Story
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
