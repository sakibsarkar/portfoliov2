'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <AlertCircle className="w-20 h-20 text-[#00FFF0] mx-auto" />
        <h1 className="text-4xl font-bold text-white">
          Something went <span className="text-[#00FFF0]">wrong</span>
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          An error occurred while processing your request. Please try again later.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90 transition-colors"
          >
            Try again
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="border-[#00FFF0] text-[#00FFF0] hover:bg-[#00FFF0]/10"
          >
            Go home
          </Button>
        </div>
      </div>
    </div>
  )
}

