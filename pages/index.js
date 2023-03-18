import Image from "next/image"

export default function Home() {
  return (
    <>
    <div>
      RESTURL_SPEAKERS {process.env.RESTURL_SPEAKERS}
      <br />
      
    </div>
    <img src ='/assets/fd.png' width={500} height={600} />
    </>
  )
}
