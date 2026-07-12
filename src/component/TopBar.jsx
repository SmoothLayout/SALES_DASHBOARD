import React from 'react'

function TopBar() {
  return (
    <header className="flex items-center justify-between border-b rounded-full border-slate-400 bg-white px-6 py-6"><div>
      <h1 className="text-lg font-semibold textslate-900">Good evening, Cyril.</h1>
      <p className="text-sm text-slate-400">Here is your dashboard</p>
    </div>
    <div className="h-9 w-9 bg-slate-200"/>
    </header>
  )
}

export default TopBar