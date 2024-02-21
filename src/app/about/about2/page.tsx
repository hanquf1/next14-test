import Link from "next/link"

export default function Detail() {

  return (
    <div className={'bg-red-200'}>
      detail Page
      <div>
        <Link href={'/'}>home</Link>

      </div>
    </div>
  )
}