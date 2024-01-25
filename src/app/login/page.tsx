import './LogIn.scss'
import Image from "next/image";
import bgImage from "@/assets/contactoImg.jpg";
import logoImage from "@/assets/iqea_logo.png";
import LogInForm from "@/Forms/LogIn/LogInForm";



export default function Home() {
  return (
    <main className=''>
      <section className="signInPage">
      <div className="signInImg">
        <Image src={bgImage} alt="background image" />
      </div>

      <div className="signInData">
        <div className="LogInHeader">
          <div className="formTitle">
            <h2>Iniciar Sesion</h2>
          </div>{" "}
          <Image src={logoImage} alt="logo" width={300}/>

        </div>

        <div className="form">

        <LogInForm/>
        </div>
      </div>
    </section>
    </main>
  )
}
