'use client'

import ProfileCard from "../Cards/ProfileCard"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container p-5 text-center">
        <h1>Desenvolvedor Web e Front-End</h1>

        <div className="flex flex-col md:flex-row justify-between">

          <div className="flex flex-col">
            <ProfileCard />
          </div>

          <div className="flex flex-col text-start">
            <div>
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, <br />
                vel nobis eos sequi aliquid tenetur, repudiandae voluptates? architecto officia!
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              svg icon animado
            </div>  
          </div>

        </div> 
      </div>
    </section>
  )
}