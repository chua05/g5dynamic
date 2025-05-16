"use client"

import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

interface UserMapProps {
  lat: number
  lng: number
  address: string
}

export default function UserMap({ lat, lng, address }: UserMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
  if (!mapContainer.current || typeof window === "undefined") return

  mapboxgl.accessToken = "pk.placeholder.token"

  if (!map.current) {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 12,
    })

    map.current.addControl(new mapboxgl.NavigationControl())

    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${address}</h3>`))
      .addTo(map.current)
  }

  return () => {
    if (map.current) {
      map.current.remove()
      map.current = null
    }
  }
}, [lat, lng, address])

  return (
    <div className="relative h-full w-full rounded-md overflow-hidden">
      <div ref={mapContainer} className="h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/80">
        <div className="text-center p-4">
          <p className="font-medium">Map Preview</p>
          <p className="text-sm text-muted-foreground">
            Location: {lat.toFixed(6)}, {lng.toFixed(6)}
          </p>
          <p className="text-xs text-muted-foreground mt-2">(Mapbox integration requires an API key)</p>
        </div>
      </div>
    </div>
  )
}
