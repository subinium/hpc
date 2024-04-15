import seabw from '../img/seabw.jpeg'
import everyworld_dubai from '../img/Everyworld & Hashed VIP Beach Club Cocktail Party at Token2049 Dubai.png'
import morningstar_dubai from '../img/Morning Star Ventures .png'
import cryptoconnect_seabw from '../img/CryptoConnect.png'
import zkonnect_seabw from '../img/ZKonnect Summit 2024.png'

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

// {
//   id: 1,
//   image: abc,
//   title: '',
//   description: '',
//   location: '',
//   detail: ``,
//   start_date: '',
//   end_date: '',
//   url: '',
//   event_type: ''

// }

const events: Event[] = [
  {
    id: 1,
    image: everyworld_dubai,
    title: 'Everyworld & Hashed VIP Beach Club Cocktail Party at Token2049 Dubai',
    description: '',
    location: 'Invite Only',
    detail: `​Please join us for a VIP Event at Token2049 Dubai to celebrate the launch of Everyworld.

    Location details to be revealed after R.S.V.P.
    
    Poolside Cocktails & Light Bites.
    
    This invitation is not transferable.
    
    `,
    start_date: 'April 17, 2024',
    end_date: 'April 17, 2024',
    url: 'https://lu.ma/xq0qvkkw',
    event_type: 'Networking'

  },
  {
    id: 2,
    image: morningstar_dubai,
    title: 'VCs Night with Hashed & Morningstar Ventures',
    description: '37xDubai',
    location: 'Invite Only',
    detail: `Join us at 37xDubai for our VCs Night with Hashed and Morningstar Ventures.

    ​Come connect with fellow investors in a private setting and learn more about the initiatives Hashed and Morningstar Ventures are planning in the UAE.
    
    This event is for VCs only. Strict screening will be applied, and RSVP confirmation will be required to enter the 37xDubai venue.
    
    ​Dress-code: Casual chic
    
    ​**Gents are kindly asked not to wear shorts and open shoes**
    `,
    start_date: 'April 17, 2024',
    end_date: 'April 17, 2024',
    url: 'https://lu.ma/hashed-morningstar',
    event_type: 'Networking'

  },
  {
    id: 3,
    image: seabw,
    title: 'SOUTHEAST ASIA BLOCKCHAIN WEEK',
    description: '',
    location: 'True Icon Hall, Bangkok, Thailand',
    detail: `Southeast Asia Blockchain Week is a premier conference dedicated to exploring the evolving landscape of Web3 technology in one of the world's most dynamic and rapidly growing regions. 

    This conference brings together industry leaders, innovators, and enthusiasts to discuss, share, and collaborate on the latest trends, developments, and opportunities within the Web3 ecosystem.`,
    start_date: 'April 22, 2024',
    end_date: 'April 28, 2024',
    url: 'https://seablockchainweek.org/',
    event_type: 'Conference'

  },
  {
    id: 4,
    image: cryptoconnect_seabw,
    title: 'CryptoConnect',
    description: '',
    location: 'Osca & Blanco',
    detail: `Are you attending SEABW? We have a happy hour just for you! We're gathering at Osca & Blanco on April 23 from 5:00-8:00 pm.

    Meet with forward-thinking developers, tech enthusiasts, and thought-leaders across Web3 as you take in the sights of the Chao Phraya River. We’ll have refreshments and hors d'oeuvres to keep the ideas flowing. This is a great opportunity to network with like-minded professionals and meet members from the Aptos, Hashed, ShardLab & Cryptomind Group teams.
    
    Please note - This is by invitation only and capacity is limited, so please confirm by the 15th of April to secure your spot.
    `,
    start_date: 'April 23, 2024',
    end_date: 'April 23, 2024',
    url: 'https://lu.ma/seabwcryptoconnect',
    event_type: 'Networking'

  },
  {
    id: 5,
    image: zkonnect_seabw,
    title: 'ZKonnect Summit 2024',
    description: '',
    location: 'FYI Center',
    detail: `ZKonnect Summit 2024: Unveiling Future Scalability with Zero Knowledge - A Zero Knowledge Summit Co-hosted by Polygon Labs, SCB 10X & SCBX

    ​In this exclusive event, co-hosted by Polygon Labs, SCB 10X, and SCBX we are taking the stage at Southeast Asia Blockchain Week 2024 in Bangkok, known for Blockchain communities. Our event aims to delve deep into the Zero Knowledge ecosystem, showcasing Polygon Labs as a pioneering force in developing a decentralized financial system with scalability powered by zero-knowledge proofs.
    `,
    start_date: 'April 23, 2024',
    end_date: 'April 23, 2024',
    url: 'https://lu.ma/g312gcvw',
    event_type: 'Networking'

  }
  // {
  //   id: 6,
  //   image: seabw,
  //   title: 'SEABW Speakers & VIP Night',
  //   description: '',
  //   location: 'Invite Only',
  //   detail: `SEABW Speakers & VIP Night serves a valuable occasion for various of influential thought leaders and builders to come together, exchange ideas, and craft meaningful plans that have the potential to bring about tangible changes within the blockchain ecosystem.
  //   `,
  //   start_date: 'April 23, 2024',
  //   end_date: 'April 23, 2024',
  //   url: 'https://seablockchainweek.org/?page=ticket',
  //   event_type: 'Networking'

  // }
  // {
  //   id: 7,
  //   image: seabw,
  //   title: 'SEABW Game Day',
  //   description: '',
  //   location: 'Invite Only',
  //   detail: `SEABW Speakers & VIP Night serves a valuable occasion for various of influential thought leaders and builders to come together, exchange ideas, and craft meaningful plans that have the potential to bring about tangible changes within the blockchain ecosystem.
  //   `,
  //   start_date: 'April 24, 2024',
  //   end_date: 'April 24, 2024',
  //   url: 'https://seablockchainweek.org/?page=ticket',
  //   event_type: 'Networking'

  // },
]

export default events