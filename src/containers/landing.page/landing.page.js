import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import Header from './components/header/header'
import Home from './components/home/home'
import Problem from './components/problem/problem'
import OurSolution from './components/our.solution/our.solution'
import ContactUs from './components/contact.us/contact.us'
import { useState } from 'react'
import { Drawer } from '@material-ui/core'
import TheProcess from './components/the.process/the.process'
import ExpectedOutcomes from './components/expected.outcomes/expected.outcomes'
import { IsMobileWidth } from './../../components/utils/util'
import { useScrollDirection } from 'react-use-scroll-direction'


export default function LandingPage(props) {

    const [selectedNav, setSelectedNav] = useState("HOME")

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)







    const dropdown = () => {
        if (selectedNav === "HOME") {
            setSelectedNav("THE_PROBLEM")
        }
        if (selectedNav === "THE_PROBLEM") {
           setSelectedNav("OUR_SOLUTION")
        }
        if (selectedNav === "OUR_SOLUTION") {
            setSelectedNav("CONTACT_US")
        }


    }

    const moveUp = () => {
        if (selectedNav === "CONTACT_US") {
            setSelectedNav("OUR_SOLUTION")
        }
        if (selectedNav === "EXPECTED_OUTCOMES") {
            setSelectedNav("THE_PROCESS")
        }
        if (selectedNav === "THE_PROCESS") {
            setSelectedNav("OUR_SOLUTION")
        }
        if (selectedNav === "OUR_SOLUTION") {
            setSelectedNav("THE_PROBLEM")
        }
        if (selectedNav === "THE_PROBLEM") {
            setSelectedNav("HOME")
        }
    }



    const scroll = () => {
        if (selectedNav === "HOME") {
            setSelectedNav("THE_PROBLEM")
        }
        if (selectedNav === "THE_PROBLEM") {
            setSelectedNav("OUR_SOLUTION")
        }
        if (selectedNav === "OUR_SOLUTION") {
            setSelectedNav("THE_PROCESS")
        }
        if (selectedNav === "THE_PROCESS") {
            setSelectedNav("EXPECTED_OUTCOMES")
        }
        if (selectedNav === "EXPECTED_OUTCOMES") {
            setSelectedNav("CONTACT_US")
        }
    }


    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const mobileWidth = IsMobileWidth()

    return (
        <div className='w-100 position-relative' id="status" >
            <Header

                openDrawer={openDrawer} />
            <div className='d-flex w-100 applied-font'>
                {
                    mobileWidth ?
                        <Drawer open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)} style={{ width: "30vh" }}>
                            <div open={true} variant='permanent' className='w-100 bg-primary d-flex justify-content-center h-100' >
                                <div className='d-flex align-items-center justify-content-center w-100 h-100' >
                                    <div className='d-flex flex-column w-100 pl-2 '>
                                        <div className='d-flex  w-100 pt-3 pb-3 cursor-pointer' style={{ borderBottom: selectedNav === "HOME" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("HOME")}>
                                            <Typography variant="h5" className={selectedNav === "HOME" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>Home</Typography>
                                        </div>
                                        <div className='d-flex  w-100 pt-3 pb-3 cursor-pointer mt-4' style={{ borderBottom: selectedNav === "THE_PROBLEM" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("THE_PROBLEM")}>
                                            <Typography variant="h5" className={selectedNav === "THE_PROBLEM" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>THE PROBLEM</Typography>
                                        </div>
                                        <div className='d-flex  w-100 pt-3 pb-3 cursor-pointer mt-4' style={{ borderBottom: selectedNav === "OUR_SOLUTION" || selectedNav === "THE_PROCESS" || selectedNav === "EXPECTED_OUTCOMES" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("OUR_SOLUTION")}>
                                            <Typography variant="h5" className={selectedNav === "OUR_SOLUTION" || selectedNav === "THE_PROCESS" || selectedNav === "EXPECTED_OUTCOMES" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>OUR SOLUTION</Typography>
                                        </div>
                                        <div className='d-flex  w-100 pt-3 pb-3 cursor-pointer mt-4' style={{ borderBottom: selectedNav === "CONTACT_US" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("CONTACT_US")}>
                                            <Typography variant="h5" className={selectedNav === "CONTACT_US" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>CONTACT US</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Drawer> : null
                }
                {
                    mobileWidth ? null :
                        <div open={true} variant='permanent' className='w-25 bg-primary d-flex justify-content-center' style={{ height: "90vh" }}>
                            <div className='d-flex align-items-center justify-content-center w-75 h-100' >
                                <div className='d-flex flex-column w-100'>
                                    <div className='d-flex justify-content-end w-100 pt-3 pb-3 cursor-pointer' style={{ borderBottom: selectedNav === "HOME" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("HOME")}>
                                        <Typography variant="h5" className={selectedNav === "HOME" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>Home</Typography>
                                    </div>
                                    <div className='d-flex justify-content-end w-100 pt-3 pb-3 cursor-pointer mt-4' style={{ borderBottom: selectedNav === "THE_PROBLEM" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("THE_PROBLEM")}>
                                        <Typography variant="h5" className={selectedNav === "THE_PROBLEM" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>THE PROBLEM</Typography>
                                    </div>
                                    <div className='d-flex justify-content-end w-100 pt-3 pb-3 cursor-pointer mt-4' style={{ borderBottom: selectedNav === "OUR_SOLUTION" || selectedNav === "THE_PROCESS" || selectedNav === "EXPECTED_OUTCOMES" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("OUR_SOLUTION")}>
                                        <Typography variant="h5" className={selectedNav === "OUR_SOLUTION" || selectedNav === "THE_PROCESS" || selectedNav === "EXPECTED_OUTCOMES" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>OUR SOLUTION</Typography>
                                    </div>
                                    <div className='d-flex justify-content-end w-100 pt-3 pb-3 cursor-pointer mt-4' style={{ borderBottom: selectedNav === "CONTACT_US" ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, .3)" }} onClick={() => setSelectedNav("CONTACT_US")}>
                                        <Typography variant="h5" className={selectedNav === "CONTACT_US" ? `text-white applied-font` : 'opacity-05 text-white applied-font'}>CONTACT US</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <div className='w-100 h-100 d-flex justify-content-center align-items-center applied-font'>
                    {
                        selectedNav === "HOME" ?
                            <Home /> : selectedNav === "THE_PROBLEM" ? <Problem /> : selectedNav === "OUR_SOLUTION" ? <div style={{ height: "90vh", overflow: "auto" }}> <OurSolution /><TheProcess /><ExpectedOutcomes /></div> : selectedNav === "CONTACT_US" ? <ContactUs /> : null
                    }
                </div>
                <div style={{ position: "absolute", bottom: 10, right: 10 }} className='cursor-pointer' className="d-flex">
                    {
                        selectedNav === "HOME" ? null :
                            <img style={{ transform: "rotate(180deg)" }} className=' cursor-pointer' onClick={moveUp} src={`${process.env.PUBLIC_URL}/assets/down-arrow.png`} width={20} height={20} />
                    }

                    {
                        selectedNav === "CONTACT_US" ? null :
                            <img src={`${process.env.PUBLIC_URL}/assets/down-arrow.png`} onClick={dropdown} className='cursor-pointer ml-2' width={20} height={20} />
                    }

                </div>
            </div>

        </div>
    )
}
