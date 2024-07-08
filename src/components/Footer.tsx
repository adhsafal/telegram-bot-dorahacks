import FullLogo from "../images/full_logo.svg";

type link = {
  label: string;
  url: string;
};

type footerType = {
  title: string;
  link: link[];
};

export default function Footer() {
  const data: footerType[] = [
    {
      title: "Ecosystem",
      link: [
        {
          label: "Developer Docs",
          url: "#",
        },
        {
          label: "Protocol Disclaimer",
          url: "#",
        },
        {
          label: "Security ",
          url: "#",
        },
      ],
    },
    {
      title: "Social media",
      link: [
        {
          label: "Twitter",
          url: "#",
        },
        {
          label: "Facebook",
          url: "#",
        },
        {
          label: "Instagram",
          url: "#",
        },
      ],
    },
    {
      title: "Legal",
      link: [
        {
          label: "Privacy Policy",
          url: "#",
        },
        {
          label: "Terms of Service",
          url: "#",
        },
      ],
    },
  ];

  return (
    <footer className="mx-[100px] sm:mx-[16px] ">
      <div className=" bg-line-gradient h-[1px] mb-[60px] sm:mb-[40px]"></div>
      <article className="flex items-center justify-between sm:items-start sm:gap-y-[40px] sm:flex-col">
        <img src={FullLogo} alt="/" />
        <div className=" grid grid-cols-3 sm:grid-cols-2 gap-x-[60px] sm:gap-y-[40px]">
          {data.map(({ title, link }) => (
            <div key={title}>
              <p className=" font-bold text-[16px] leading-[28px] text-white">
                {title}
              </p>
              <div>
                {link.map(({ label, url }) => (
                  <a href={url} key={label}>
                    <p className=" font-normal text-[14px] leading-[28px] text-white/50">
                      {label}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </footer>
  );
}
