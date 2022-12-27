import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.js';
import AboutUs from './components/AboutUs.js'
import General from './components/general.js'
import Cosmetic from './components/cosmetic.js'
import Surgical from './components/surgical.js'
import CleaningExams from './components/cleaningexams.js'
import Crowns from './components/crowns.js'
import Extractions from './components/extractions.js'
import GumTherapy from './components/gumtherapy.js'
import BondingFillings from './components/bondingfillings.js'
import Dentures from './components/dentures.js'
import NightGuards from './components/nightguards.js'
import FamilyDentistry from './components/familydent.js'
import EmergencyCare from './components/emergencycare.js'
import InvisAlign from './components/invisalign.js'
import TeethWhitening from './components/whitening.js'
import Veneers from './components/veneers.js'
import SmileMakeover from './components/smileMakeover.js'
import GummySmileReduction from './components/gummySmileReduction.js'
import FullMouthRehabilitation from './components/fullmouthrehab.js'
import Implants from './components/implants.js'
import RootCanal from './components/rootcanal.js'
import BoneGraft from './components/boneGraft.js'
import ImplantSupportedDentures from './components/implantSupportedDentures.js'
import Bridges from './components/bridges.js'
import OverDentures from './components/overDentures.js'
import SameDayImplants from './components/sameDayImplants.js'
import Book from './components/bookappointment.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/general" element={<General/>} />
    <Route path="/cosmetic" element={<Cosmetic/>} />
    <Route path="/surgical" element={<Surgical/>} />
    <Route path="/cleaningexams" element={<CleaningExams/>} />
    <Route path="/crowns" element={<Crowns/>}/>
    <Route path="/extractions" element={<Extractions/>} />
    <Route path="/gumtherapy" element={<GumTherapy/>} />
    <Route path="/bondingfillings" element={<BondingFillings/>} />
    <Route path="/dentures" element={<Dentures/>} />
    <Route path="/nightguards" element={<NightGuards/>} />
    <Route path="/familydent" element={<FamilyDentistry/>}/>
    <Route path="/emergencyCare" element={<EmergencyCare/>} />
    <Route path="/invisalign" element={<InvisAlign/>} />
    <Route path="/teethwhitening" element={<TeethWhitening/>} />
    <Route path="/veneers" element={<Veneers/>} />
    <Route path="/smilemakeover" element={<SmileMakeover/>} />
    <Route path="/gummysmilereduction" element={<GummySmileReduction/>}/>
    <Route path="/fullmouthrehab" element={<FullMouthRehabilitation/>} />
    <Route path="/implants" element={<Implants/>} />
    <Route path="/rootcanal" element={<RootCanal/>} />
    <Route path="/bonegraft" element={<BoneGraft/>} />
    <Route path="/implantsupporteddentures" element={<ImplantSupportedDentures/>} />
    <Route path="/bridges" element={<Bridges/>} />
    <Route path="/overdentures" element={<OverDentures/>} />
    <Route path="/samedayimplant" element={<SameDayImplants/>} />
    <Route path="/bookappointment" element={<Book/>} />


    
  </Routes>
  </BrowserRouter> 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
