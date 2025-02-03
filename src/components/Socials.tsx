import React from "react";

const Socials: React.FC = () => {
  return (
    <div className="flex justify-end text-lg font-light">
      <ul className="text-right flex flex-col gap-1">
        <li>
          <a
            href="https://www.linkedin.com/in/kkjc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KaiKitJeffreyChan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </li>
        <li>
          <a href="mailto:jeffreykkchan@gmail.com">EMAIL</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1vBZvVMZReMWrpgvkTPRYlS6NdOUHDVfo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
