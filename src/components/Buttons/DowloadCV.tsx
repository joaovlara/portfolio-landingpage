import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGlobe, FaDownload } from "react-icons/fa";

export default function DowloadCV() {
  return (
      <div className="flex justify-center">
        <a download className="flex items-center gap-2 bg-white text-[#222] px-8 py-4 rounded-full shadow-lg font-mono text-lg font-medium hover:bg-[#17C8E0] hover:text-white transition">
          Download CV <FaDownload />
        </a>
      </div>  )
}