

const home = () => (
        <>
            <div style={{ display: "flex", height: "100vh", width: '100%', flexDirection: 'column' }}>
                <div style={{ backgroundColor: "white", height: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                    <div className='homeImg' style={{ display: "flex", justifyContent: "center" }}>
                        <h1 style={{ fontFamily: 'Montserrat_sub', fontSize: '105px', color: 'white', display: "flex", flexDirection: "column", alignSelf: "end", textAlign: "center", marginBottom: '0px' }}>
                            Hernan

                            <br />
                            <span style={{ fontFamily: 'Montserrat_suba', fontWeight: 'bold', fontSize: "larger" }}>
                                ESCORCIA
                            </span>
                        </h1>
                    </div>
                </div>


                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly', backgroundColor: "black", height: 'inherit', color: 'white' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '40px' }}>
                        <h3 style={{ color: '#59ca59', margin: '1px', fontSize: '13px' }}>BORN IN</h3>
                        <b style={{ fontSize: '18px' }}>Colombia</b>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '40px' }}>
                        <h3 style={{ color: '#59ca59', margin: '1px', fontSize: '13px' }}>EXPERIENCE</h3>
                        <b style={{ fontSize: '18px' }}>+5 Months</b>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '40px' }}>
                        <h3 style={{ color: '#59ca59', margin: '1px', fontSize: '13px' }}>DATE OF BIRTH</h3>
                        <b style={{ fontSize: '18px' }}>26 September 2000</b>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', margin: '40px' }}>
                        <h3 style={{ margin: '1px', fontSize: '18px' }}>Got a project?</h3>
                        <b style={{ margin: '1px', fontSize: '18px', color: '#59ca59', marginLeft: '10px', textDecoration: 'underline', cursor: 'pointer' }}>Let's talk</b>
                    </div>
                </div>

            </div>
        </>
    
    )






export default home;