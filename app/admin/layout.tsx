import Sidebar from "@/components/admin/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar>
        <div className="lg:ms-24 mt-24">{children}</div>
      </Sidebar>
    </div>
  );
};

export default layout;
