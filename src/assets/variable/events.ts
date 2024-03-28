import hashedPotatoClubFounderNight from '../img/hashed_potato_club_founders_night.png'
import kbwAmuseBouche from '../img/kbw_amuse_bouche.png'
import nearSeoul2023 from '../img/near_seoul_2023.png'
import seabw from '../img/seabw.jpeg'

type Event = {
  id: number
  image: string
  title: string
  description: string
  detail: string
  location: string
  start_date: string
  end_date: string
  url: string
  event_type: string
}

const events: Event[] = [
  {
    id: 1,
    image: seabw,
    title: 'SOUTHEAST ASIA BLOCKCHAIN WEEK',
    description: 'Showcasing the future of Web3 in Southeast Asia',
    location: 'True Icon Hall, Bangkok, Thailand',
    detail: `Southeast Asia Blockchain Week is a premier conference dedicated to exploring the evolving landscape of Web3 technology in one of the world's most dynamic and rapidly growing regions. 

    This conference brings together industry leaders, innovators, and enthusiasts to discuss, share, and collaborate on the latest trends, developments, and opportunities within the Web3 ecosystem.`,
    start_date: 'April 22, 2024',
    end_date: 'April 28, 2024',
    url: 'https://seablockchainweek.org/',
    event_type: 'Conference'

  }
  // {
  //   id: 2,
  //   image: hashedPotatoClubFounderNight,
  //   title: 'Hashed Potato Club Founders Night',
  //   description: 'Date : September 5, 2023 ~ August 5,\n2023\nLocation: Only for Hashed Potato\nClub Members'
  // },
  // {
  //   id: 3,
  //   image: kbwAmuseBouche,
  //   title: 'KBW Amuse Bouche',
  //   description: 'Date : September 5, 2023 ~ August 5,\n2023\nLocation: Only for Hashed Potato\nClub Members'
  // },
  // {
  //   id: 4,
  //   image: nearSeoul2023,
  //   title: 'NEAR Seoul VIP Night',
  //   description: 'Date : September 5, 2023 ~ August 5,\n2023\nLocation: Only for Hashed Potato\nClub Members'
  // }
]

export default events