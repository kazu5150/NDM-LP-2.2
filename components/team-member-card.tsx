import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  position: string
  imageUrl: string
  description: string
  color?: string // Added color prop
}

export function TeamMemberCard({ name, position, imageUrl, description, color = "#0070f3" }: TeamMemberProps) { // Added color prop with default value
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 transition-all hover:shadow-lg hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`${name}の写真`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl" style={{ color: color }}>{name}</CardTitle> {/* Updated CardTitle */}
        <p className="text-sm text-gray-400">{position}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

