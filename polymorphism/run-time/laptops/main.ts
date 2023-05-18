import Linux from "./Linux";
import Macbook from "./Macbook";
import Windows from "./Windows";

const mac = new Macbook();
const linux = new Linux();
const windows = new Windows();

mac.startOperatingSystem();
linux.startOperatingSystem();
windows.startOperatingSystem();
