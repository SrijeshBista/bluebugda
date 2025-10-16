// import react from "react";
import { useState , useEffect } from "react";

const images =[
    "https://imgs.search.brave.com/HmiCbuiPSbADoVrz5b7c5Ke-hMrhj-0SK8iCijRoEY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMi8wNS9Db3J0/YWRhLTJlMDEwNzcu/cG5nP3F1YWxpdHk9/OTAmcmVzaXplPTU1/Niw1MDU",
    "https://imgs.search.brave.com/V1UJz6t7GKiyF3xvXzVw7l36OuW8ul4mWGSI72y6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg2/ODM1NTk5L3Bob3Rv/L2ljZS1jb2ZmZWUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVF3UFhzU0JsR2F4/WGNxZDgxczZXcWZL/bmdWZnN1RWh4SlJZ/MW02S3Rya0U9",
    "https://imgs.search.brave.com/ES0SDiKjdc53ZzCxBCB2ydRnG5IQ8c9EIRFI8oWxuGw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c291dGhlcm5saXZp/bmcuY29tL3RobWIv/b1c3VXNGLUJ4Yko5/UEJqbEJSZE5TdU1P/ZzlFPS8xNTAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCkvaGVpcmxvb21f/MDJfMDcwXzBfMF8w/LTIwMDAtYzYxOWZm/Y2I4YzMwNDg1Yzg1/NmZhODE4ZjhiY2Vi/Y2YuanBn",
    "https://imgs.search.brave.com/X5MQdiAh5lWxImb3MFDxtFvZN5icp4O8pv-BMjc6E0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c291dGhlcm5saXZp/bmcuY29tL3RobWIv/M1RfUF8xdFJLX2Vq/cVk2dTFLWHp4UnZZ/Z0RjPS8xNTAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCkvSGVpcmxvb21f/MDJfMDU1XzAtMS1h/MmNhYTZiYmEzYjM0/MDc2YWEwNmFlMzVi/MzdhOGY1Mi5qcGc",
    "https://www.lifeloveandsugar.com/wp-content/uploads/2023/06/Chocolate-Cupcakes-Recipe3.jpg",

    
];
console.log(images);
const WorkSection =()=> {
    const [current ,setcurrent]=useState(0);
    // function for next slide 
    const nextslide =() =>{
        setcurrent(current === images.length -1 ? 0 : current +1 );
    }
    // function for prev slide 
    const prevslide =() =>{
        setcurrent(current === 0 ? images.length -1  : current -1) ;
    }
    // navigation dot 
        const goToSlide = (index) => {
            setcurrent(index);
        };
    // auto slide 
        useEffect(() => {
            const interval = setInterval(() => {
             nextslide();
            }, 3500); 
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [current]);



  return (
    <>
    <section id="work-section">
        <div className="work-main">
            <div className="work-left">
                <div className="work-title">
                    <h4 className="up-title"></h4>
                    <h1 className="title-down">With A Combination Of <br/> <span>Technology</span> And More .</h1>
                </div>
                <div className="work-des">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut.</p>
                </div>
                <div className="work-btn">
                    <button>Learn More</button>
                </div>
            </div>
            <div className="work-right">

                <div className="img">
                    {images.map((item,index) => current ===index &&(
                        <img key={index} src={item} alt="img"/>
                    )
                    )}            
                </div>   
                    {/* Navigation Dots */}
                    <div className="dots-container">
                        {images.map((_, index) => (
                            <span
                            key={index}
                            className={`dot ${current === index ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                <div className="work-btns">
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WorkSection;
