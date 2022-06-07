import wave from '../assets/621c2cf7525dae619ce95520_Wave.svg'

const home = () => (
    <>
        <div className="flex flex-col w-full">
            <div style={{ height: '50vh' }} className="flex items-end justify-center bg-white">
                <div className='homeImg' style={{ display: "flex", justifyContent: "center" }}>
                    <img src={wave} style={{ bottom: "5%", top: "34vh", zIndex: "1", maxWidth: "inherit" }} className="absolute left-auto right-auto w-screen" ></img>
                    <h1 style={{  fontSize: 'calc(7vw - 50px)' }} className="flex flex-col self-end text-center mb-0 text-white z-10" aria-label="Hi! I'm a developer">
                        Hi! I'm Hernan&nbsp;<span className="typewriter thick"></span>
                    </h1>
                </div>
            </div>


            <div style={{ height: '50vh' }} className="flex items-end justify-evenly bg-black text-white">
                <div className="flex flex-col mb-14">
                    <h3 style={{ color: "#83fa47" }} className="m-px  text-sm font-bold">BORN IN</h3>
                    <b className="text-lg">Colombia</b>
                </div>
                <div className="flex flex-col mb-14">
                    <h3 style={{ color: "#83fa47" }} className="m-px  text-sm font-bold">EXPERIENCE</h3>
                    <b className="text-lg">+6 Months</b>
                </div>
                <div className="flex flex-col mb-14">
                    <h3 style={{ color: "#83fa47" }} className="m-px text-sm font-bold">DATE OF BIRTH</h3>
                    <b className="text-lg">26 September 2000</b>
                </div>
                <div className="flex flex-row mb-14">
                    <b className="m-px text-lg">Got a project?</b>
                    <b style={{ color: "#83fa47" }} className="m-px text-lg text-green-500 ml-2.5 underline cursor-pointer font-bold">Let's talk</b>
                </div>
            </div>

        </div>
    </>

)






export default home;