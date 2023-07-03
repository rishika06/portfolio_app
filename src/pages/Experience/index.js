import React from "react";
import PageLayout from "../../components/PageLayout";
import { companyList } from "../../utils/constants";

import "./index.scss";

function Experience() {
  return (
    <PageLayout>
      <div className="experience__container">
        {companyList?.map((item) => (
          <div className="experience__content">
            <div className="experience__conatent-heading">
              <span className="experience__name">{item?.name}</span>&nbsp; |
              <span className="experience__designation">
                &nbsp; {item?.designation}
              </span>
            </div>
            <p className="experience__duration">{item?.duartion}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default Experience;
