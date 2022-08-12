import Image from "next/image";
import sma_das from "../../public/assets/images/sma_das.jpg";

const ProfilePicture: React.FC = () => {
  return (
    <>
      <Image
        src={sma_das}
        layout="fill"
        alt="Sma Das"
        className="rounded-r-full hover:rounded-l-full hover:rounded-none transition-all duration-1000"
        placeholder="empty"
      />
    </>
  );
};

export default ProfilePicture;
