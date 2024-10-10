import React from 'react'
import { FileText, Image, Video } from 'lucide-react'

interface ContentOverviewProps {
  platform: string
}

const ContentOverview: React.FC<ContentOverviewProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const contentBreakdown = {
    textPosts: 150,
    imagePosts: 75,
    videoPosts: 25,
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <FileText className="mr-2" /> Content Overview ({platform})
      </h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <FileText className="mr-2" size={16} /> Text Posts: {contentBreakdown.textPosts}
        </li>
        <li className="flex items-center">
          <Image className="mr-2" size={16} /> Image Posts: {contentBreakdown.imagePosts}
        </li>
        <li className="flex items-center">
          <Video className="mr-2" size={16} /> Video Posts: {contentBreakdown.videoPosts}
        </li>
      </ul>
    </div>
  )
}

export default ContentOverview