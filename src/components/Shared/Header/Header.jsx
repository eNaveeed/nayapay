import { nayapayLogo } from "../../../assets";
import { headerNavLinks } from "../../../constants";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-x-10">
      <h1 className="">
        <img src={nayapayLogo} alt="nayapay-logo" className="w-[220px]" />
      </h1>
      <div className="flex items-center gap-x-5">
        <nav>
          <ul className="flex gap-x-5">
            {headerNavLinks.map((nav) => (
              <li key={nav.id}>{nav.title}</li>
            ))}
          </ul>
        </nav>
        <button className="rounded bg-[#23D67C] px-8 py-2 text-white">
          Get Nayapay
        </button>
      </div>
    </header>
  );
};

export default Header;
