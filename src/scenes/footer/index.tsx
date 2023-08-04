import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            To enhance the quality of life in the communities, we serve through
            our fitness philosophy, facilities, programs, and products and to
            instill in the lives of people everywhere the value of health and
            fitness.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Privacy Policy</p>
          <p className="my-5">Download the Evo-App</p>
          <p>Join our newsletter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Open 6am-10pm Monday through Saturday</p>
          <p>(386) EVO-TIME</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
