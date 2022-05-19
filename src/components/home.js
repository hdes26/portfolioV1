import wave from '../assets/621c2cf7525dae619ce95520_Wave.svg'

const home = () => (
    <>
        <div style={{ height: "130vh" }} className="flex flex-col w-full">
            <div style={{ height: 'inherit' }} className="flex items-end justify-center bg-white">
                <div className='homeImg' style={{ display: "flex", justifyContent: "center" }}>
                    <h1 style={{ fontFamily: 'Montserrat_sub', fontSize: '82px' }} className="flex flex-col self-center text-center mb-0 text-white ">
                        Hernan

                        <br />
                        <span style={{ fontFamily: 'Montserrat_suba', fontWeight: 'bold', fontSize: "larger" }}>
                            ESCORCIA
                        </span>
                    </h1>
                </div>
            </div>


            <div style={{ height: '160vh' }} className="flex items-end justify-evenly bg-black text-white">
                            <img src={wave} style={{bottom:"5%"}} className="absolute left-auto top-auto right-auto  z-10 w-full" ></img>
                <div className="flex flex-col mb-14">
                    <h3 className="m-px text-green-500 text-sm">BORN IN</h3>
                    <b className="text-lg">Colombia</b>
                </div>
                <div className="flex flex-col mb-14">
                    <h3 className="m-px text-green-500 text-sm">EXPERIENCE</h3>
                    <b className="text-lg">+5 Months</b>
                </div>
                <div className="flex flex-col mb-14">
                    <h3 className="m-px text-green-500 text-sm">DATE OF BIRTH</h3>
                    <b className="text-lg">26 September 2000</b>
                </div>
                <div className="flex flex-row mb-14">
                    <b className="m-px text-lg">Got a project?</b>
                    <b className="m-px text-lg text-green-500 ml-2.5 underline cursor-pointer">Let's talk</b>
                </div>
            </div>

        </div>
    </>

)






export default home;