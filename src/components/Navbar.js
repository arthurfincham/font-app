import NavButton from './NavButton';
import NavButtonContent from './NavButtonContent';
import ContentToggle from './ContentToggle';

export default function Navbar({ setTheme }) {
  return (
    <nav class="bg-yellow-300 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <h1 className="text-black font-bold">The Only Fonts You Need</h1>
        <div className="flex space-x-4">
          <NavButton name="Themes">
            <NavButtonContent>
              <ContentToggle name="Dark" bgColor="#222223" fontColor="white" setTheme={setTheme} />
              <ContentToggle name="Light" bgColor="white" fontColor="black" setTheme={setTheme} />
              <ContentToggle name="Yellow" bgColor="#FEF3C7" fontColor="#372FA3" setTheme={setTheme} />
            </NavButtonContent>
          </NavButton>
        </div>
      </div>
    </nav>
  );
}
