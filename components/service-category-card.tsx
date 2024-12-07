import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  items: {
    title: string;
    href: string;
  }[];
}

export function ServiceCategoryCard({
  title,
  description,
  items
}: ServiceCategoryCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            {description}
          </div>
          <div className="space-y-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex w-full items-center rounded-md border border-transparent p-2 hover:underline hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}