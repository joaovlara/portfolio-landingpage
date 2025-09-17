'use client'

import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="container p-9 flex justify-around">

        <div className="flex-col justify-center items-center max-w-1/2">
          <h1>Desenvolvedor Web e Front-End</h1>
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis totam fugiat,
            aspernatur consectetur nulla modi adipisci quas ex est, numquam recusandae natus iure,
            repellendus ab perferendis. Eaque voluptate a ducimus!
          </h3>
          <button className="btn-primary">Call to Action</button>
        </div>

        <div className="flex max-w-1/2">
          <Image src="/images/image.jpg" alt="Hero Image" width={300} height={300} className="rounded-full" />
        </div>

      </div>

      <div>
        main skills
      </div>

    </section>
  )
}