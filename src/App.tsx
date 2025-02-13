import ProfilePicture from "./components/profile-picture"
import About from "./components/about"
import SocialList from "./components/social-list"
import ProjectCard from "./components/project-card"
import SectionTitle from "./components/section-title"

export enum AnimationOrder {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
  FIFTH = 5,
  SIXTH = 6,
  SEVENTH = 7,
  EIGHTH = 8,
}

export default function App() {
  const ANIMATION_DELAY_INCREMENT = 0.1

  const generateDelayStyle = (order: AnimationOrder) => {
    const style = {
      animation: `fade-in 1s ease ${
        (order - 1) * ANIMATION_DELAY_INCREMENT
      }s forwards`,
    }
    return style
  }

  return (
    <div className="flex flex-col px-4 py-10 gap-6 sm:gap-10 mx-auto max-w-[600px]">
      <div
        style={generateDelayStyle(AnimationOrder.FIRST)}
        className="flex sm:flex-row sm:items-start sm:gap-6 animated-block"
      >
        <div className="w-[65px] hidden sm:block"></div>
        <div className="flex flex-col gap-6">
          <ProfilePicture />
          <h1 className="font-bold text-3xl tracking-tight text-zinc-50">
            Maxime Eliazord
          </h1>
        </div>
      </div>

      <div
        style={generateDelayStyle(AnimationOrder.SECOND)}
        className="flex flex-col sm:flex-row sm:items-start sm:gap-6 animated-block"
      >
        <SectionTitle title="about" hides />
        <About />
      </div>

      <div
        style={generateDelayStyle(AnimationOrder.THIRD)}
        className="flex flex-col sm:flex-row sm:items-start sm:gap-6 animated-block"
      >
        <SectionTitle title="socials" hides />
        <SocialList />
      </div>

      <div
        style={generateDelayStyle(AnimationOrder.FOURTH)}
        className="flex flex-col sm:flex-row sm:items-start sm:gap-6 animated-block"
      >
        <SectionTitle title="projects" />
        <div className="flex flex-wrap gap-4">
          <ProjectCard
            name="Medical Platform"
            description="Online booking for teleconsultations or physical appointments with doctors"
            colorVariant="rose"
            url="https://sequodia.com/plateforme-medicale-de-teleconsultation-et-gestion-des-rendez-vous"
            stack="NestJS | Angular | AWS | Stripe"
          />
          <ProjectCard
            name="HR Tool Platform"
            description="Client files matching with housing based on specific criteria."
            colorVariant="teal"
            url="https://sequodia.com/plateforme-de-gestion-de-logements-de-fonction"
            stack="NestJS | Angular | AWS"
          />
        </div>
      </div>
      <div
        style={generateDelayStyle(AnimationOrder.FIFTH)}
        className="flex flex-col sm:flex-row sm:items-start sm:gap-6 animated-block"
      >
        <SectionTitle title="hacks" />
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <ProjectCard
            name="Devmentor - Chainlink Constellation Hackathon"
            description="Help Web3 developers learn by connecting mentors with mentees"
            colorVariant="blue"
            url="https://devpost.com/software/devmentor"
            stack="Solidity | Foundry | NextJS | Chainlink"
          />
          <ProjectCard
            name="Whal-E - ETHGlobal Agentic"
            description="Whale tracking, trade analysis and copying multi-agent system"
            colorVariant="slate"
            url="https://ethglobal.com/showcase/whal-e-awzsa"
            stack="Solidity | NestJS | TheGraph | LangChain"
          />
          <ProjectCard
            name="Mosaic - Chainlink Block Magic Hackathon"
            description="Tokenize and fractionalize physical artwork using oracle networks"
            colorVariant="violet"
            url="https://devpost.com/software/mosaic-zy3lu2"
            stack="Solidity | Foundry | NextJS | Chainlink"
          />
          <ProjectCard
            name="LemonAds - ETHOnline 2024"
            description="Decentralized ad management for publishers and advertisers"
            colorVariant="yellow"
            url="https://ethglobal.com/showcase/lemonads-mo7gg"
            stack="Solidity | NextJS | AWS | Chainlink"
          />
        </div>
      </div>
    </div>
  )
}
