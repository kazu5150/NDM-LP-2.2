import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface ServiceCategoryCardProps {
  title: string
  description: string
  href: string
  color: string
}

export function ServiceCategoryCard({ title, description, href, color = "#0070f3" }: ServiceCategoryCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle style={{ color: color }} className="text-xl text-blue-400">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300" asChild>
          <Link href={href}>
            詳細を見る
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

