import hashedPotatoClubFounderNight from '../img/hashed_potato_club_founders_night.png'
import kbwAmuseBouche from '../img/kbw_amuse_bouche.png'
import nearSeoul2023 from '../img/near_seoul_2023.png'

type Event = {
  id: number
  image: string
  title: string
  description: string
}

const events: Event[] = [
  {
    id: 1,
    image: hashedPotatoClubFounderNight,
    title: 'Hashed Potato Club Founders Night',
    description: 'Date : September 5, 2023 ~ August 5,\n2023\nLocation: Only for Hashed Potato\nClub Members'
  },
  {
    id: 2,
    image: kbwAmuseBouche,
    title: 'KBW Amuse Bouche',
    description: 'Date : September 5, 2023 ~ August 5,\n2023\nLocation: Only for Hashed Potato\nClub Members'
  },
  {
    id: 3,
    image: nearSeoul2023,
    title: 'NEAR Seoul VIP Night',
    description: 'Date : September 5, 2023 ~ August 5,\n2023\nLocation: Only for Hashed Potato\nClub Members'
  }
]

export default events