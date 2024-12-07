import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"

interface ServiceItem {
  title: string
  href: string
}

interface ServiceCategoryProps {
  title: string
  items: ServiceItem[]
}

export function ServiceCategory({ title, items }: ServiceCategoryProps) {
  return (
    <Card className="group transition-all hover:shadow-lg bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-blue-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.title}>
              <Link 
                href={item.href}
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-blue-400 group-hover:text-blue-300"
              >
                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-blue-400" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

