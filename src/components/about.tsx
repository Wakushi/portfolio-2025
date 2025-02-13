import { FaGuitar, FaHourglassEnd } from "react-icons/fa6"
import { MdOutlineScubaDiving } from "react-icons/md"
import Badge from "./badge"

export default function About() {
  return (
    <div className="flex flex-col gap-4 ">
      <p>
        Experienced backend developer with a computer science degree,
        specialized in <Badge className="bg-[#2F74C0]/30">TypeScript</Badge>{" "}
        <Badge className="bg-[#58A646]/30">NodeJS</Badge> and{" "}
        <Badge className="bg-[#2b247c]">Solidity</Badge>. Based in Paris.
      </p>

      <p>
        Built high-impact software solutions over the past 3 years, from{" "}
        <span className="text-zinc-50/70">Web3 dApps</span> to{" "}
        <span className="text-zinc-50/70">enterprise applications</span>,
        including <span className="text-zinc-50/70">B2C platforms</span> scaling
        to 100,000+ users.
      </p>
      <p>
        When I'm not shipping products, I enjoy participating in hackathons{" "}
        <FaHourglassEnd className="inline-block text-sm mb-[0.1rem]" />, playing
        in musicals <FaGuitar className="inline-block text-sm mb-[0.1rem]" />{" "}
        and scuba diving{" "}
        <MdOutlineScubaDiving className="inline-block text-sm mb-[0.1rem]" />.
      </p>
    </div>
  )
}
