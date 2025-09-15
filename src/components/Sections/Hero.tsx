'use client'

import ProfileCard from "../Cards/ProfileCard";
import HeroText from "./HeroText";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">

      <div className="container p-5 text-center">
        <h1>Desenvolvedor Web e Front-End</h1>

        <div className="flex flex-col md:flex-row justify-between">

          <div className="flex flex-col w-1/4">
            <ProfileCard />
          </div>


          {/** Hero Content */}
          <div className="flex flex-col text-start w-2/4">
            <HeroText />
          </div>

          {/** Animation */}

          <div className="flex flex-col justify-center items-center">
            <div>
              <DotLottieReact
                src="/images/WhvPfby2ki.json"
                loop
                autoplay
                style={{ width: 500 }}
                /* to do fix height */
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}