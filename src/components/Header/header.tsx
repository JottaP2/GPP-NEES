import Image from "next/image";

function Header (){
    return(
        <header className="w-full bg-[#FF9359] text-white p-4 flex justify-around items-center">
            <Image src="/logoHorizontal.svg" alt="GPP Ufal Logo" width={300} height={50} />
            <ul className="flex gap-10">
              <li><a href="">Home</a></li>
              <li><a href="">Equipe</a></li>
              <li><a href="">Trajetória</a></li>
              <li><a href="">Dados</a></li>
              <li><a href="">Escolas</a></li>
            </ul>
        </header>
    )
}

export default Header;