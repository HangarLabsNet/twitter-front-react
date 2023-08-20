import { apple, google, logo, logoGray } from '../../assets';

export default function SignupPage() {
  const footerLinks = [
    'About',
    'Help Center',
    'Terms of Service',
    'Cookie Policy',
    'Ads info',
    'Blog',
    'Status',
    'Carrers',
    'Brand Resources',
    'Advertising',
    'Marketing',
    'Twitter for Business',
    'Developers',
    'Directory',
    'Settings',
    '© 2021 Twitter Inc.',
  ];

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-grow flex'>
        <div className='w-4/6 bg-black flex justify-center items-center'>
          <img src={logoGray} alt='Logo of twitter' className='w-44 h-42' />
        </div>
        <div className='w-2/6 flex bg-white'>
          <div className='h-max mt-28 ml-11'>
            <img src={logo} alt='Logo of twitter' className='w-7 h-6' />
            <h2 className='mt-8 text-[82px] font-black font-roboto'>
              Happening now
            </h2>
            <h3 className='mt-4 text-[42px] font-black font-roboto'>
              Join Twitter today
            </h3>
            <div className='space-y-4 mt-4 mx-auto'>
              {/* TODO CAMBIAR */}
              <button className='w-96 h-16 bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300'>
                <img src={google} alt='Google' className='w-8 h-8 mr-2' />
                Sign up with Google
              </button>
              <button className='w-96 h-16 bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300'>
                <img src={apple} alt='Apple' className='w-8 h-8 mr-2' />
                Sign up with Apple
              </button>
              <button className='w-96 h-16 bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300'>
                Sign up with phone or email
              </button>
            </div>
            <div className='w-96 mt-15'>
              <p className='font-roboto mt-5'>
                By singing up you agree to the&nbsp;
                <span className='text-info cursor-pointer'>
                  Terms of Service&nbsp;
                </span>
                and&nbsp;
                <span className='text-info cursor-pointer'>
                  Privacy Policy&nbsp;
                </span>
                , including
                <span className='text-info cursor-pointer '> Cookie Use </span>.
              </p>
              <p className='font-roboto mt-3'>
                Already have an account?
                <span className='text-info cursor-pointer'> Log in </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-14 bg-white text-center flex items-center justify-center px-4'>
        {footerLinks.map((link, index) => (
          <p
            key={index}
            className='text-black mr-4 font-roboto font-normal cursor-pointer'
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}
