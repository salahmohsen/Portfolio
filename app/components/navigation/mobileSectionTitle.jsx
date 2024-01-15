"use client";

const MobileSectionTitle = ({ sectionTitle }) => {
  return (
    <div className=" sticky top-5 -ml-4 flex h-10 w-screen items-center justify-between border-b bg-night/15 px-4 backdrop-blur-3xl dark:border-faded sm:-ml-8 sm:px-8 lg:hidden ">
      <p className="font-bold">{sectionTitle}</p>
    </div>
  );
};

export default MobileSectionTitle;
