import Link from 'next/link'

// Components
import Button from '@repo/app/components/button'
import Text from '@repo/app/components/text'

export default function DetailScreen() {
  return (
    <div className="p-8">
      <Text>Detail Screen</Text>
      <Link prefetch={false} href="/">
        <Button text="Back" className="mt-2" />
      </Link>
    </div>
  )
}
