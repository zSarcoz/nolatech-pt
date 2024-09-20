import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@mui/material"

export default function Navbar() {
  const router = useRouter()
  return (
    <nav
      className={`w-full flex h-20 items-center justify-between px-2 lg:px-5 fixed top-0 left-0 z-50 `}
    >
      <div className="w-full flex h-20 items-center justify-between bg-white backdrop-blur-sm px-2 lg:px-5 mt-4 rounded-2xl shadow-xl">
        <div className="flex items-center gap-5 mr-5">
          <Link href="/">
            <Image
              src="https://nolatech.ai/media/images/logo_Nolatech_Color_horizontal.original.origin.height-20.png"
              alt="nolatech-logo"
              className="w-8 ml-5"
              loading="lazy"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="w-1/2 lg:w-1/2 flex items-center justify-center"></div>
        <div className="flex items-center gap-5">
          <Button
            sx={{
              backgroundColor: "#035096",
              color: "white",
              borderRadius: "8px",
              px: "1rem",
              py: ".5rem",
              fontSize: "1rem",
              textTransform:"none"

            }}
            onClick={() => router.push("/sign-up")}
          >
            Registrarte
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "8px",
              px: "1rem",
              py: ".5rem",
              fontSize: "1rem",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              textTransform:"none"
            }}
            onClick={() => router.push("/login")}
          >
            Iniciar Sesion
          </Button>
        </div>
      </div>
    </nav>
  )
}
