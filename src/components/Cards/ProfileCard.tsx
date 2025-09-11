export default function ProfileCard() {
  return (
    <div className="p-4 border border-primary rounded-lg bg-secondary text-center">
      <img
        src="/profile.jpg"
        alt="Profile Picture"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">João Vitor de Lara</h2>
      <p className="text-gray-300 mb-4">Desenvolvedor Web e Front-End</p>
      <div className="flex justify-center space-x-4">
        <a
          href="#"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}   