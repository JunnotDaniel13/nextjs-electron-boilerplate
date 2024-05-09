import EditSVG from "./assets/edit.svg";
import Menhera from "./assets/menhera.png";
import Image from "next/image";
import HealthCheck from "../components/health-check";

export default async function Home() {
  return (
    <div>
      <main>
        <div>
          <h1 className="text-7xl font-bold underline">
            NextJS + Electron Boilerplate
          </h1>
          <h4>That one boilerplate you couldn{"'"}t find, until now.</h4>
          <input type="text" />
        </div>
        <HealthCheck />

        <button>click here please!</button>

        <Image src={Menhera.src} alt="menhera" width={200} height={200} />
        <div>Get started by editting frontend/app/page.tsx</div>
        <footer>
          {"<"}/{">"} with ♥
        </footer>
      </main>
    </div>
  );
}
