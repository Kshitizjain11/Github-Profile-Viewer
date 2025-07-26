import Particles from "./ParticlesStyle"
import React from 'react'

const Particle = ({children}) => {
  return (
    <div style={{ width: '100%', height: '800px', position: 'relative' }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      >
        {children}
        {typeof window !== 'undefined' && typeof document !== 'undefined' &&
          (typeof window.__PARTICLE_CHILDREN__ !== 'undefined' ? window.__PARTICLE_CHILDREN__ : null)}
      </Particles>
    </div>
  )
}

export default Particle

