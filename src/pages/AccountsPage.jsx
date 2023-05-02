import React from 'react'
import MediaConnectCard from '../components/cards/MediaConnectCard'
import SidePanel from '../components/panels/SidePanel'

import instagram from '../static/images/logos/instagram.svg'
import twitter from '../static/images/logos/twitter.svg'
import facebook from '../static/images/logos/facebook.svg'
import reddit from '../static/images/logos/reddit.svg'
import linkedin from '../static/images/logos/linkedin.svg'
import tiktok from '../static/images/logos/tiktok.svg'
import youtube from '../static/images/logos/youtube.svg'
import pinterest from '../static/images/logos/pinterest.svg'



export default function AccountsPage() {
  return (
    <div className='flex w-screen h-screen bg-purple-400'>
      <SidePanel />
      <div className='flex flex-wrap mb-[1000px] justify-center'>
        <MediaConnectCard 
          image={instagram}
          platform={"Instagram"}
          status={"Not connected"}
        />
        <MediaConnectCard
          image={twitter}
          platform={"Twitter"}
          status={"Not connected"}
        />
        <MediaConnectCard
          image={facebook}
          platform={"Facebook"}
          status={"Not connected"}
        />
        <MediaConnectCard
          image={linkedin}
          platform={"Linkedin"}
          status={"Not connected"}
        />
        <MediaConnectCard
          image={reddit}
          platform={"Reddit"}
          status={"Not connected"}
        />
        <MediaConnectCard
          image={youtube}
          platform={"Youtube"}
          status={"Not connected"}
        />
        <MediaConnectCard
          image={tiktok}
          platform={"TikTok"}
          status={"Not connected"}
        />
        <MediaConnectCard
          image={pinterest}
          platform={"Pinterest"}
          status={"Not connected"}
        />

      </div>
    </div>
  )
}
