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
        {/* Black logo starts */}
        <div className='w-[1162px] bg-black flex justify-center items-center'>
          <img src={logoGray} alt='Logo of twitter' width={215} height={205} />
        </div>
        {/* Black logo ends */}
        <div className='flex bg-white'>
          <div className='h-max mt-[165px] ml-[44px]'>
            <img src={logo} alt='Logo of twitter' width={43} height={42} />
            <h2 className='mt-[57px] text-[84px] font-black font-roboto'>
              Happening now
            </h2>
            <h3 className='mt-[25px] text-[42px] font-black font-roboto'>
              Join Twitter today
            </h3>
            <div className='flex flex-col space-y-4 mt-[14px] mx-auto'>
              <button className='w-[403px] h-[62px] bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300'>
                <img
                  src={google}
                  alt='Google'
                  width={31}
                  height={32}
                  className='mr-2'
                />
                Sign up with Google
              </button>
              <button className='w-[403px] h-[62px] bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300'>
                <img
                  src={apple}
                  alt='Apple'
                  width={31}
                  height={32}
                  className='mr-2'
                />
                Sign up with Apple
              </button>
              <button className='w-[403px] h-[62px] bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300'>
                Sign up with phone or email
              </button>
            </div>
            <div className='w-[373px] mt-[15px]'>
              <p className='font-roboto'>
                By singing up you agree to the
                <span className='text-[#1E97E1] cursor-pointer'> Terms of Service </span>
                and
                <span className='text-[#1E97E1] cursor-pointer'> Privacy Policy </span>,
                including
                <span className='text-[#1E97E1] cursor-pointer '> Cookie Use </span>.
              </p>
              <p className='font-roboto mt-[12px]'>
                Already have an account?{' '}
                <span className='text-[#1E97E1] cursor-pointer'> Log in </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer starts */}
      <div className='w-screen h-[55px] bg-white text-center flex items-center justify-center px-4'>
        {footerLinks.map((link, index) => (
          <p
            key={index}
            className='text-black mr-[19px] font-roboto font-normal cursor-pointer'
          >
            {link}
          </p>
        ))}
      </div>
      {/* Footer Ends  */}
    </div>
  );
}
