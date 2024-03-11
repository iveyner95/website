import { BackgroundBeams } from './BackgroundBeams';
import { ContactSectionHeader } from './ContactSectionHeader';


export const ContactSection = () => {
  return (
    <div className="h-[100vh] w-full rounded-md black relative flex flex-col items-center justify-center antialiased">
      <ContactSectionHeader />
      <BackgroundBeams />
    </div>
  )
}
