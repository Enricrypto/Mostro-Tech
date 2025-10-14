"use client"

import { Hero } from "@/components/hero/Hero"
import { InputField, Input } from "@/components/inputs/Input"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>InputField Components</h2>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Default variant:</label>
          <InputField 
            themeVariant="default" 
            placeholder="Enter some text..." 
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Search variant:</label>
          <InputField 
            themeVariant="search" 
            placeholder="Search for something..." 
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}></label>
          <Input 
          />
        </div>
      </div>
    </>
  )
}
