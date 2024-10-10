import React from 'react'
import { Lock } from 'lucide-react'

interface PrivacyOverviewProps {
  platform: string
}

const PrivacyOverview: React.FC<PrivacyOverviewProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const privacySettings = {
    profileVisibility: 'Public',
    postVisibility: 'Friends Only',
    tagApproval: 'Enabled',
    dataSharing: 'Limited',
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Lock className="mr-2" /> Privacy Settings Overview ({platform})
      </h3>
      <ul className="space-y-2">
        <li>Profile Visibility: {privacySettings.profileVisibility}</li>
        <li>Post Visibility: {privacySettings.postVisibility}</li>
        <li>Tag Approval: {privacySettings.tagApproval}</li>
        <li>Data Sharing: {privacySettings.dataSharing}</li>
      </ul>
    </div>
  )
}

export default PrivacyOverview