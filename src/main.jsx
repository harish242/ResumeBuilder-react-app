import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
// import ResumeBuilder from './ResumeBuilder'
const container=document.querySelector('#root')
const root=createRoot(container)
root.render(<App />)