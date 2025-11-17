import Link from 'next/link'

// Components
import Button from '@repo/app/components/button'
import Text from '@repo/app/components/text'

export default function HomeScreen() {
  return (
    <div className="p-8">
      <Text customFontSize="text-lg">Next.js + Expo Monorepo</Text>
      <Text className="my-2">Home Screen</Text>
      <Link prefetch={false} href="/detail">
        <Button text="Detail Page" />
      </Link>
    </div>
  )
}
