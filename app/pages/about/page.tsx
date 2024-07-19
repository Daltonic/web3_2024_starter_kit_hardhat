import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>About</h1>
      <Image
        src={
          "https://scontent-los2-1.xx.fbcdn.net/o1/v/t0/f1/m253/upload_img_7280005_07_18_2024_11_55_03_413_802480711473231555.jpeg?_nc_ht=scontent-los2-1.xx.fbcdn.net&_nc_cat=108&ccb=9-4&oh=00_AYBtumlwLBvt_suKiXGvantnjloBkfqQ2bV_1PmON5LO4Q&oe=669B4554&_nc_sid=5b3566"
        }
        width={100}
        height={100}
        alt="About"
      />
    </div>
  );
};

export default Page;
