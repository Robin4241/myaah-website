'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Copy } from 'lucide-react'
import { Twitter, Send } from 'lucide-react'

const PawPrint = ({ x, y }: { x: number; y: number }) => (
  <div 
    className="paw-print absolute pointer-events-none"
    style={{ 
      left: x, 
      top: y, 
      backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"%23FFA07A\"/><circle cx=\"15\" cy=\"15\" r=\"10\" fill=\"%23FF6B6B\"/><circle cx=\"35\" cy=\"15\" r=\"10\" fill=\"%23FF6B6B\"/><circle cx=\"15\" cy=\"35\" r=\"10\" fill=\"%23FF6B6B\"/><circle cx=\"35\" cy=\"35\" r=\"10\" fill=\"%23FF6B6B\"/></svg>')",
      width: '20px',
      height: '20px',
      backgroundSize: 'contain',
      opacity: 0,
      animation: 'fadeInOut 2s forwards'
    }}
  />
)

export default function Component() {
  const [copied, setCopied] = useState(false)
  const [pawPrints, setPawPrints] = useState<Array<{ id: number; x: number; y: number }>>([])
  const secretCode = 'TBA'

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(secretCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [secretCode])

  const addPawPrint = useCallback((x: number, y: number) => {
    setPawPrints(prev => [...prev, { id: Date.now(), x, y }])
    setTimeout(() => {
      setPawPrints(prev => prev.slice(1))
    }, 2000)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.1) { // 10% chance to add a paw print
        addPawPrint(e.clientX, e.clientY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [addPawPrint])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E6] to-[#FFE4B5] text-[#4A3728] flex flex-col items-center justify-center p-4 space-y-8 relative overflow-hidden">
      {pawPrints.map(paw => (
        <PawPrint key={paw.id} x={paw.x} y={paw.y} />
      ))}
      
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider flex items-center justify-center gap-3">
          <span className="text-4xl">🐾</span>
          <span className="bg-gradient-to-r from-[#FF9D6C] via-[#FF6B6B] to-[#FFA07A] text-transparent bg-clip-text 
                         [text-shadow:0_0_10px_rgba(255,107,107,0.5)]">
            Myaah
          </span>
          <span className="text-4xl">😺</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          <span className="text-2xl">🐱</span>
          {' THE PURRFECT CRYPTO KITTY! '}
          <span className="text-2xl">🐱</span>
        </h2>
      </div>

      {/* Video/Image Section */}
      <div className="relative w-full max-w-sm aspect-square rounded-lg overflow-hidden
                    [box-shadow:0_0_20px_rgba(255,107,107,0.5)] transform hover:scale-105 transition-transform duration-300">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezgif-7-8ca4d74df8%20(2)-cOO0DTOEnNE0Z5LCTTAQL29eD8MLty.gif"
          alt="Cute White Cat GIF"
          fill
          className="object-contain object-center"
          sizes="(max-width: 384px) 100vw, 384px"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4">
          <p className="text-white text-sm font-bold">Hear the Myaah, Feel the Purr!</p>
        </div>
      </div>

      {/* CTA Button */}
      <Link 
        href="#"
        className="px-10 py-5 text-2xl font-bold rounded-full
                 bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD700]
                 hover:from-[#FF5252] hover:via-[#FF7F50] hover:to-[#FFC300]
                 transition-all duration-200 transform hover:scale-105
                 [box-shadow:0_0_20px_rgba(255,107,107,0.3)] text-white"
      >
        <span className="text-2xl">🐾</span>
        {' ADOPT $MYAAH NOW! '}
        <span className="text-2xl">🐾</span>
      </Link>

      {/* Secret Code Section */}
      <div className="w-full max-w-2xl">
        <div className="bg-[#FFF8DC] rounded-xl p-4 space-y-3 [box-shadow:0_0_15px_rgba(255,165,0,0.3)]">
          <p className="text-center text-[#8B4513]">
            <span className="text-lg">🎵</span>
            {' KITTY\'S SECRET MYAAH CODE '}
            <span className="text-lg">🎵</span>
          </p>
          <button
            onClick={handleCopy}
            className="w-full p-3 bg-[#FFDAB9] rounded-lg flex items-center justify-center gap-2 hover:bg-[#FFE4B5] transition-colors"
          >
            <code className="font-mono text-sm text-[#8B4513]">{secretCode}</code>
            <Copy className="w-4 h-4 text-[#8B4513]" />
          </button>
          <p className="text-center text-[#8B4513]">
            <span className="text-lg">🐾</span>
            {' TAP TO COPY! '}
            <span className="text-lg">🐾</span>
          </p>
          {copied && (
            <p className="text-center text-green-600 text-sm">Myaah! Copied to clipboard!</p>
          )}
        </div>
      </div>

      {/* Tokenomics Section */}
      <div className="w-full max-w-2xl">
        <div className="bg-[#FFF8DC] rounded-xl p-4 space-y-3 [box-shadow:0_0_15px_rgba(255,165,0,0.3)]">
          <h3 className="text-center text-[#8B4513] text-xl font-bold">
            <span className="text-2xl">📊</span> Tokenomics <span className="text-2xl">📊</span>
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-[#8B4513]">
              <span className="font-semibold">Total Supply:</span>
            </p>
            <p className="text-[#8B4513]">1,000,000,000</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#8B4513]">
              <span className="font-semibold">LP Burned:</span>
            </p>
            <p className="text-[#8B4513]">100%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#8B4513]">
              <span className="font-semibold">Tax:</span>
            </p>
            <p className="text-[#8B4513]">0</p>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
        <Link 
          href="https://x.com/myaahsolana"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-3 bg-[#FFB6C1] rounded-full text-center font-bold text-sm sm:text-base
                   hover:bg-[#FFA07A] transition-all duration-200 transform hover:scale-105 text-[#8B4513]
                   flex flex-col items-center justify-center"
        >
          <Twitter className="w-6 h-6 mb-1" />
          <span>JOIN THE CATMUNITY!</span>
        </Link>
        <Link 
          href="https://t.me/myaahsol"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-3 bg-[#98FB98] rounded-full text-center font-bold text-sm sm:text-base
                   hover:bg-[#90EE90] transition-all duration-200 transform hover:scale-105 text-[#8B4513]
                   flex flex-col items-center justify-center"
        >
          <Send className="w-6 h-6 mb-1" />
          <span>PURR CHAT!</span>
        </Link>
        <Link 
          href="#"
          className="flex-1 px-4 py-3 bg-[#87CEFA] rounded-full text-center font-bold text-sm sm:text-base
                   hover:bg-[#00BFFF] transition-all duration-200 transform hover:scale-105 text-[#8B4513]
                   flex flex-col items-center justify-center"
        >
          <span className="text-xl mb-1">📈</span>
          <span>WHISKER CHART!</span>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </div>
  )
}
