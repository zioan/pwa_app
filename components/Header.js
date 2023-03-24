import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ margin: '1rem 0 5rem 0' }}
    >
      <Image src="/icon-192x192.png" alt="logo" width={75} height={75} />
      <button>Alle Produkte</button>
      <div className="input-group mb-3" style={{ width: '50%' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Suchen"
          aria-label="Suchen"
        />
      </div>
      <button>Hart</button>
    </div>
  )
}

export default Header
